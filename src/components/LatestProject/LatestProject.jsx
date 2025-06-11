import React from "react";
import "./LatestProject.css";

const backgroundCode = `
export default function LatestProject() {
  return (
    <section
      id="LatestProject"
      style={{
        position: "relative",
        textAlign: "center",
        marginBottom: 40,
        height: 955,
        overflow: "hidden",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <img
        alt="background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }} 
`;

export default function LatestProject() {
  return (
    <div className="latest-wrapper">
      <pre className="latest-bg left">{backgroundCode.repeat(10)}</pre>
      <pre className="latest-bg right">{backgroundCode.repeat(10)}</pre>

      <section className="latest-content">
        <h2>Latest Project</h2>
        <p>
          This website was built using React and is hosted on a Raspberry Pi acting as a personal web server.
          Running modern web technologies such as React and CSS animations on a low-budget, self-hosted platform is both effective and reliable.
          An NGINX reverse proxy handles traffic routing, and SSL certificates are automatically managed via Let's Encrypt for secure HTTPS access.
          This project was both enjoyable and insightful — it allowed me to deepen my practical skills in frontend development, server configuration, and secure web hosting, while also highlighting areas where I can still improve.
        </p>

        <a
          href="https://github.com/milan-bueki/MyWebsite"
          target="_blank"
          rel="noopener noreferrer"
          className="latest-link"
        >
          <svg
            height="24"
            width="24"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07
                      -.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08
                      -.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 012 0c1.53-1.04 2.2-.82 
                      2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 
                      3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 
                      8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          View code on GitHub
        </a>
      </section>
    </div>
  );
}
