$ErrorActionPreference = 'Stop'

$websiteRoot = Split-Path -Parent $PSScriptRoot
$plannerRoot = Join-Path (Split-Path -Parent $websiteRoot) 'date-planner'
$plannerDist = Join-Path $plannerRoot 'dist'
$target = Join-Path $websiteRoot 'public\for-you'

if (-not (Test-Path (Join-Path $plannerRoot 'package.json'))) {
  throw "Date Planner repository not found at '$plannerRoot'."
}

Write-Host "Building Date Planner from $plannerRoot"
Push-Location $plannerRoot
try {
  npm run build
  if ($LASTEXITCODE -ne 0) {
    throw "Date Planner build failed with exit code $LASTEXITCODE."
  }
}
finally {
  Pop-Location
}

if (-not (Test-Path (Join-Path $plannerDist 'index.html'))) {
  throw "Date Planner build did not produce '$plannerDist\index.html'."
}

if (Test-Path $target) {
  Remove-Item $target -Recurse -Force
}

New-Item -ItemType Directory -Path $target -Force | Out-Null
Copy-Item (Join-Path $plannerDist '*') $target -Recurse -Force
Write-Host "Date Planner copied to $target"