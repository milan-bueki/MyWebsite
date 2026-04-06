import React from "react";
import "./PortfolioProject.css";

export default function PortfolioProject() {
  return (
    <section className="portfolio-project">
      <div className="portfolio-project-container">
        <div className="portfolio-hero">
          <span className="portfolio-badge">Featured Project</span>
          <h1 className="portfolio-title">Personal Portfolio Website</h1>
          <p className="portfolio-subtitle">
            A self-hosted React portfolio deployed on a Raspberry Pi and served
            securely through NGINX and Cloudflare.
          </p>
        </div>

        <div className="portfolio-meta-grid">
          <div className="portfolio-meta-card">
            <h3>Role</h3>
            <p>Developer / Designer / Self-Hoster</p>
          </div>

          <div className="portfolio-meta-card">
            <h3>Stack</h3>
            <p>React, NGINX, Raspberry Pi, Cloudflare</p>
          </div>

          <div className="portfolio-meta-card">
            <h3>Focus</h3>
            <p>Frontend, deployment, HTTPS, secure access</p>
          </div>
        </div>

        <div className="portfolio-content-grid">
          <div className="portfolio-main">
            <section className="portfolio-section">
              <h2>Overview</h2>
              <p>
                This project is my personal portfolio website. I built it to
                create a central place to present my projects, technical
                interests, and practical learning progress in web development
                and cyber security.
              </p>
              <p>
                Instead of deploying it to a standard hosting provider, I wanted
                to build and run the site on my own infrastructure. That made
                the project both a portfolio piece and a practical self-hosting
                exercise.
              </p>
            </section>

            <section className="portfolio-section">
              <h2>Architecture</h2>
              <p>
                The frontend is built with React. After the build process, the
                generated static files are served locally through NGINX on a
                Raspberry Pi. Public traffic is routed through a Cloudflare
                Tunnel, which allows secure remote access without exposing ports
                directly to the internet.
              </p>
              <p>
                This setup avoids traditional port forwarding and removes the
                need for a public IP address, while still enabling secure HTTPS
                access from anywhere.
              </p>
            </section>

            <section className="portfolio-section">
              <h2>What I Learned</h2>
              <p>
                Through this project, I deepened my practical understanding of
                React-based frontend development, deployment workflows, Linux
                hosting, reverse proxy concepts, DNS handling, and HTTPS
                delivery.
              </p>
              <p>
                It also helped me better understand the relationship between
                application design and infrastructure decisions — especially how
                usability, security, and maintainability interact in real-world
                setups.
              </p>
            </section>

            <section className="portfolio-section">
              <h2>Next Steps</h2>
              <p>
                In the future, I want to expand the site with more polished
                project detail pages, additional animations, stronger visual
                consistency, and more cybersecurity-related writeups.
              </p>
              <p>
                I also plan to refine the structure further so that each project
                can be documented in a more professional and reusable format.
              </p>
            </section>
          </div>

          <aside className="portfolio-sidebar">
            <div className="portfolio-side-card">
              <h3>Highlights</h3>
              <ul>
                <li>Self-hosted on Raspberry Pi</li>
                <li>React frontend</li>
                <li>Served with NGINX</li>
                <li>Secure access via Cloudflare Tunnel</li>
                <li>No port forwarding required</li>
              </ul>
            </div>

            <div className="portfolio-side-card">
              <h3>Project Goals</h3>
              <p>
                Build a modern portfolio, learn practical deployment, and create
                a secure and lightweight hosting setup under my own control.
              </p>
            </div>

            <div className="portfolio-side-card">
              <h3>Code</h3>
              <a
                href="https://github.com/milan-bueki/MyWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button"
              >
                View on GitHub
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}