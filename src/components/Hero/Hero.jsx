import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero">
      {/*<img
        src="/portrait_schwarzweiß.PNG"
        alt="Hintergrundbild"
        className="hero-bg-image"
      />*/}

      <div className="hero-inner">
        <p className="hero-small-text">I am</p>
        <h1 className="hero-main-heading">A Cyber Security Student</h1>

        <div className="hero-marquee-container">
          <div className="hero-marquee-label">I am interested in:</div>
          <div className="hero-marquee-track">
            <div className="hero-marquee-text">
              Information Security&nbsp;&nbsp;&nbsp;
              Network Security&nbsp;&nbsp;&nbsp;
              Potentially Redteaming&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
