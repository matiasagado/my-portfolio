import React, { useRef } from "react";
import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);
  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-greeting">Hello, I'm</span>
          <span className="hero-name">Matias Agado</span>
        </h1>
        <h2 className="hero-subtitle">Software Engineer</h2>
        <p className="hero-description">
          I'm a <b>Software Engineer</b> based in San Francisco. I'm passionate
          about building large-scale, high-impact products, and constantly
          exploring new technologies.
        </p>
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
