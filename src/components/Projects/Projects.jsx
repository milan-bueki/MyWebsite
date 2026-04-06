import React, { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "Self-hosted React website running on a Raspberry Pi with NGINX and Cloudflare Tunnel for secure public access.",
    tech: ["React", "NGINX", "Raspberry Pi", "Cloudflare"],
    link: "/projects",
    buttonText: "View Project",
  },
  {
    title: "Cryptic Quiz Challenge",
    description:
    "Interactive puzzle-based quiz combining decoding, cryptography, steganography, and playful exploration.",
    tech: ["React", "JavaScript", "CSS", "Python"],
    link: "/projects",
    buttonText: "View Project",
},
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const renderCard = (project, position, index) => {
    const isCenter = position === "center";
    const mobileClass = isMobile ? "mobile" : "";
    const titleClass = isCenter ? "center" : "side";

    return (
      <Link
        key={`${project.title}-${index}`}
        to={project.link}
        onClick={(e) => {
          if (!isCenter) {
            e.preventDefault();
            goToIndex(index);
          }
        }}
        className={`project-card ${position} ${mobileClass}`}
      >
        <div className="project-card-content">
          <h3 className={`project-card-title ${titleClass}`}>{project.title}</h3>

          <p className={`project-card-description ${titleClass}`}>
            {project.description}
          </p>

          {project.tech && (
            <div className={`project-card-tech ${titleClass}`}>
              {project.tech.map((item, i) => (
                <span key={i} className="project-tech-badge">
                  {item}
                </span>
              ))}
            </div>
          )}

          {isCenter && project.buttonText && (
            <div className="project-card-button-wrapper">
              <span className="project-card-button">{project.buttonText}</span>
            </div>
          )}

          {!isCenter && !isMobile && (
            <span className="project-card-hint">Zum Fokussieren klicken</span>
          )}
        </div>
      </Link>
    );
  };

  if (projects.length === 0) {
    return null;
  }

  if (projects.length === 1) {
    return (
      <section
        className={`projects-section ${isMobile ? "mobile" : ""}`}
        id="projects"
      >
        <h2 className="projects-heading">Projekte</h2>

        <div className={`projects-carousel ${isMobile ? "mobile" : ""}`}>
          {renderCard(projects[0], "center", 0)}
        </div>
      </section>
    );
  }

  if (projects.length === 2) {
    const sideIndex = currentIndex === 0 ? 1 : 0;

    return (
      <section
        className={`projects-section ${isMobile ? "mobile" : ""}`}
        id="projects"
      >
        <h2 className="projects-heading">Projekte</h2>

        <div className={`projects-row ${isMobile ? "mobile" : ""}`}>
          <button
            onClick={goPrev}
            aria-label="Vorheriges Projekt"
            className={`projects-arrow ${isMobile ? "mobile" : ""}`}
          >
            <span className="projects-arrow-icon">←</span>
          </button>

          <div className={`projects-carousel two-items ${isMobile ? "mobile" : ""}`}>
            {renderCard(projects[currentIndex], "center", currentIndex)}
            {renderCard(projects[sideIndex], "side", sideIndex)}
          </div>

          <button
            onClick={goNext}
            aria-label="Nächstes Projekt"
            className={`projects-arrow ${isMobile ? "mobile" : ""}`}
          >
            <span className="projects-arrow-icon">→</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`projects-section ${isMobile ? "mobile" : ""}`}
      id="projects"
    >
      <h2 className="projects-heading">Projekte</h2>

      <div className={`projects-row ${isMobile ? "mobile" : ""}`}>
        <button
          onClick={goPrev}
          aria-label="Vorheriges Projekt"
          className={`projects-arrow ${isMobile ? "mobile" : ""}`}
        >
          <span className="projects-arrow-icon">←</span>
        </button>

        <div className={`projects-carousel ${isMobile ? "mobile" : ""}`}>
          {isMobile ? (
            renderCard(projects[currentIndex], "center", currentIndex)
          ) : (
            <>
              {renderCard(projects[prevIndex], "left", prevIndex)}
              {renderCard(projects[currentIndex], "center", currentIndex)}
              {renderCard(projects[nextIndex], "right", nextIndex)}
            </>
          )}
        </div>

        <button
          onClick={goNext}
          aria-label="Nächstes Projekt"
          className={`projects-arrow ${isMobile ? "mobile" : ""}`}
        >
          <span className="projects-arrow-icon">→</span>
        </button>
      </div>
    </section>
  );
}