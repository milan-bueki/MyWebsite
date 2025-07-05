import React, { useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop(); // z. B. "CV_de.pdf"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDropdown(false);
  };

  return (
    <section id="hero">
      <img
        src="/portrait_schwarzweiß.PNG"
        alt="Hintergrundbild"
        className="hero-bg-image"
      />

      <div className="hero-inner">
        <p className="hero-small-text">I am</p>
        <h1 className="hero-main-heading">A Cyber Security Student</h1>

        <div className="hero-marquee-container">
          <div className="hero-marquee-label">I am interested in:</div>
          <div className="hero-marquee-track">
            <div className="hero-marquee-text">
              Information Security&nbsp;&nbsp;&nbsp;
              Network Security&nbsp;&nbsp;&nbsp;
              Potentially Pentesting&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>

        <div className="hero-download-wrapper" style={{ position: "relative" }}>
          <button
            className="hero-download-button"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Download CV
          </button>

          {showDropdown && (
            <div className="hero-download-dropdown">
              <button onClick={() => handleDownload("/CV_milanbueki_de.pdf")}>
                German
              </button>
              <button onClick={() => handleDownload("/CV_milanbueki_en.pdf")}>
                English
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
