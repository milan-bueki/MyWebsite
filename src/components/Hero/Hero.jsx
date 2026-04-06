import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

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
              Pentesting&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>

        <div className="hero-download-wrapper" ref={dropdownRef}>
          <button
            className="hero-download-button"
            onClick={() => setShowDropdown((prev) => !prev)}
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