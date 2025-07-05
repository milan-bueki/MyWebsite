import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:milanbueki@gmx.de" className="footer-link" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> E-Mail
        </a>
        <a href="https://github.com/milan-bueki" className="footer-link" target="_blank" rel="noopener noreferrer">
          <FaGithub /> milan-bueki
        </a>
        <a href="https://www.linkedin.com/in/milan-b%C3%BCki-54575a201/" className="footer-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> Milan Büki
        </a>
      </div>

      <div className="footer-legal">
        <p><strong>Impressum:</strong></p>
        <p>
          Milan Büki<br />
          51491 Overath<br />
          Deutschland<br />
          <a href="mailto:milanbueki@gmx.de" style={{ color: "#fff", textDecoration: "none" }}>
          E-Mail: milanbueki@gmx.de
          </a>

        </p>
      </div>

      <p className="footer-copy">© {new Date().getFullYear()} Milan Büki</p>
    </footer>
  );
}
