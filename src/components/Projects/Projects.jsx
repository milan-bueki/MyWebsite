import React from "react";

const projects = [
  {
    title: "Projekt 1",
    description: "Beschreibung von Projekt 1.",
    link: "#",
  },
  {
    title: "Projekt 2",
    description: "Beschreibung von Projekt 2.",
    link: "#",
  },
  {
    title: "Projekt 3",
    description: "Beschreibung von Projekt 3.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ marginBottom: 50 }}>
      <h2
        style={{
          color: "#fff",
          borderBottom: "2px solid #bb86fc",
          paddingBottom: 8,
          marginBottom: 20,
        }}
      >
        Projekte
      </h2>
      <div
        style={{
          display: "flex",
          gap: 20,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            style={{
              display: "block",
              width: 250,
              padding: 20,
              textDecoration: "none",
              backgroundColor: "#1e1e1e",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(187, 134, 252, 0.5)",
              color: "#ddd",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
