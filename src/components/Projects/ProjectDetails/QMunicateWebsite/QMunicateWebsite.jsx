import React from "react";
import "./QMunicateWebsite.css";

export default function QMunicateWebsite() {
  return (
    <section className="qmunicate-project">
      <div className="qmunicate-project-container">
        <div className="qmunicate-hero">
          <span className="qmunicate-badge">Featured Project</span>
          <h1 className="qmunicate-title">QMunicate Website</h1>
          <p className="qmunicate-subtitle">
            A modern React-based website combining clean frontend design with
            an interactive 3D-inspired visualization of a quantum optics cavity.
          </p>
        </div>

        <div className="qmunicate-meta-grid">
          <div className="qmunicate-meta-card">
            <h3>Role</h3>
            <p>Frontend Developer / Concept Design</p>
          </div>

          <div className="qmunicate-meta-card">
            <h3>Stack</h3>
            <p>React, Vite, CSS, JavaScript</p>
          </div>

          <div className="qmunicate-meta-card">
            <h3>Focus</h3>
            <p>Interactive UI, visualization, routing, branding</p>
          </div>
        </div>

        <div className="qmunicate-content-grid">
          <div className="qmunicate-main">
            <section className="qmunicate-section">
              <h2>Overview</h2>
              <p>
                The QMunicate website was built as a modern landing page to
                present the idea and vision of the project in a clean and
                structured way.
              </p>
              <p>
                Besides standard frontend elements like navigation, content
                sections, and legal pages, the project focuses on creating a
                more immersive experience through visual storytelling.
              </p>
            </section>

            <section className="qmunicate-section">
              <h2>Quantum Optics Cavity Visualization</h2>
              <p>
                A key feature of the website is a simplified visualization of a
                quantum optics cavity. The cavity was conceptually recreated in
                the frontend to give users an intuitive impression of the
                physical setup.
              </p>
              <p>
                The user can "fly" through the cavity using a camera-like
                movement, creating a dynamic perspective that makes the concept
                more tangible and engaging.
              </p>
              <p>
                This approach bridges the gap between abstract physics concepts
                and interactive web experiences.
              </p>
            </section>

            <section className="qmunicate-section">
              <h2>Implementation</h2>
              <p>
                The website is built using React and structured into reusable
                components such as navigation, hero section, content blocks,
                and footer.
              </p>
              <p>
                Routing is handled with React Router, allowing separation
                between the main page and additional pages like Impressum and
                Privacy Policy.
              </p>
            </section>

            <section className="qmunicate-section">
              <h2>What I Learned</h2>
              <p>
                This project helped me deepen my understanding of frontend
                architecture, component-based design, and routing in React.
              </p>
              <p>
                I also explored how interactive elements can enhance user
                understanding of complex topics like quantum optics.
              </p>
            </section>

            <section className="qmunicate-section">
              <h2>Next Steps</h2>
              <p>
                Future improvements include expanding the visualization,
                adding smoother animations, and integrating more advanced
                interactive elements.
              </p>
            </section>
          </div>

          <aside className="qmunicate-sidebar">
            <div className="qmunicate-side-card">
              <h3>Highlights</h3>
              <ul>
                <li>Interactive cavity visualization</li>
                <li>Camera-based "fly-through" effect</li>
                <li>Modern React landing page</li>
                <li>Clean component structure</li>
                <li>Responsive design</li>
              </ul>
            </div>

            <div className="qmunicate-side-card">
              <h3>Project Goals</h3>
              <p>
                Combine modern web development with intuitive visualization to
                make complex scientific concepts more accessible.
              </p>
            </div>

            <div className="qmunicate-side-card">
              <h3>Website</h3>
              <a
                href="https://qmunicate.de"
                target="_blank"
                rel="noopener noreferrer"
                className="qmunicate-button"
              >
                Visit Website
              </a>
            </div>

            <div className="qmunicate-side-card">
              <h3>Code</h3>
              <a
                href="https://github.com/milan-bueki/QMunicate-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="qmunicate-button"
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