import React, { useEffect, useState } from "react";
import "./Wetter.css";

const embedUrl = "https://jan-arn.github.io/nimbus/models";

export default function Wetter() {
  const [iframeStatus, setIframeStatus] = useState("loading");

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (iframeStatus === "loading") {
        setIframeStatus("failed");
      }
    }, 7000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [iframeStatus]);

  const handleIframeLoad = () => {
    setIframeStatus("loaded");
  };

  const handleIframeError = () => {
    setIframeStatus("failed");
  };

  return (
    <main className="wetter-page">
      <div className="wetter-page-inner">
        <section className="wetter-hero">
          <p className="wetter-eyebrow">Wetter</p>

        </section>

        <div className="wetter-frame-wrap">
          {iframeStatus !== "failed" ? (
            <iframe
              title="Nimbus Wetter"
              src={embedUrl}
              className="wetter-frame"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              loading="lazy"
            />
          ) : (
            <div className="wetter-fallback">
              <p>
                Die externe Seite kann hier nicht eingebettet werden, weil sie
                externe Sicherheitsrichtlinien verwendet.
              </p>
              <a
                href={embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wetter-button"
              >
                In neuem Tab öffnen
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
