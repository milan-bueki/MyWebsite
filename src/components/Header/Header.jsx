import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        {/* Klickbarer Name → führt zur Startseite */}
        <Link to="/" className="header-name">
          Milan Büki
        </Link>

        <div className="header-links">
          <a
            href="https://github.com/milan-bueki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/milan-b%C3%BCki-54575a201/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://tryhackme.com/p/milanb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TryHackMe"
          >
            <img
              src="/tryhackme.png"
              alt="TryHackMe"
              style={{ height: "24px", marginTop: "2px" }}
            />
          </a>
        </div>
      </div>
    </header>
  );
}