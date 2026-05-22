import React from "react";
import { Link } from "react-router-dom";
import "./ProjectPages.css";

const projectList = [
    {
  title: "QMunicate Website",
  description:
    "Landing page for QMunicate with modern React components, clean navigation, legal pages, and responsive frontend structure.",
  tags: ["React", "Vite", "Frontend", "Web Design"],
  link: "/projects/qmunicate",
  featured: true,
},
  {
    title: "Personal Portfolio Website",
    description:
      "Self-hosted React website running on a Raspberry Pi with NGINX and Cloudflare Tunnel for secure public access.",
    tags: ["React", "NGINX", "Raspberry Pi", "Cloudflare"],
    link: "/projects/portfolio",
    featured: true,
  },
  {
    title: "Quiz for Friends",
    description:
      "Interactive quiz project focused on logic, clean UI design, and an engaging user experience.",
    tags: ["React", "UI/UX", "Logic", "Frontend"],
    link: "/projects/quiz",
    featured: false,
  },

];

export default function ProjectPages() {
  return (
    <section className="project-pages">
      <div className="project-pages-container">
        <div className="project-pages-hero">
          <p className="project-pages-eyebrow">Projects</p>
          <h1 className="project-pages-title">A growing collection of my work</h1>
          <p className="project-pages-intro">
            This page contains a growing overview of my projects. It includes
            self-hosted web development, practical experiments, and interactive
            ideas that reflect my learning journey in development and cyber
            security.
          </p>
        </div>

        <div className="project-pages-grid">
          {projectList.map((project, index) => (
            <Link to={project.link} className="project-tile" key={index}>
              <div className="project-tile-top">
                {project.featured && (
                  <span className="project-badge">Featured</span>
                )}
                <span className="project-arrow">↗</span>
              </div>

              <div className="project-tile-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="project-tag" key={tagIndex}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}