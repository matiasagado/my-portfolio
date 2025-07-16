import React, { useRef } from "react";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  const one = (
    <p>
      I'm a <b>Software Engineer</b> based in San Francisco. I'm passionate
      about building large-scale, high-impact products, and constantly exploring
      new technologies.
    </p>
  );

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">Matias Agado</span>
        </h1>
        <h2 className="hero-subtitle">
          Software Engineer &amp; React Developer
        </h2>
        <div className="hero-description">{one}</div>
        <div className="hero-buttons">
          <a href="#projects" className="hero-button primary">
            View My Work
          </a>
          <a href="#contact" className="hero-button secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
