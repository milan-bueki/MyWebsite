# React + Vite

## Date Planner deployment

The separate `date-planner` repository is built into `public/for-you/` by:

```bash
npm run build:date-planner
```

The script expects the repositories to be sibling folders:

```text
C:\Users\milan\MyWebsite
C:\Users\milan\date-planner
```

For a complete production build, run `npm run build:full`. The Date Planner
uses `base: "/for-you/"` and contains its own `noindex, nofollow` metadata.
Its EmailJS values must be supplied through the Date Planner's local
`.env.local` or deployment environment:

```text
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Do not commit `.env.local` or replace these values with placeholders.

When using NGINX, redirect the URL without a trailing slash to the static
directory before the regular website fallback:

```nginx
location = /for-you {
	return 301 /for-you/;
}
```

The existing NGINX document root must serve `public/for-you/` as
`/for-you/`. Do not add `/for-you` to `robots.txt` or the sitemap.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
