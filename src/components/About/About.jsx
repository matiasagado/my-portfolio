import React from "react";
import "./Aboout.css";

function About() {
  const one = (
    <p>
      I'm currently a <b>Senior</b> at the{" "}
      <a href="https://www.usfca.edu/">University of San Francisco</a>, pursuing
      a <b>Bachelor's of Science</b> in <b>Computer Science</b>. I'm passionate
      about Software Engineering and always eage to explore new technologies.
    </p>
  );

  const two = <p>Here are some technologies I've been working with:</p>;

  const three = (
    <p>
      Outside of coursework I am interested in following the developments of
      computing technology.
    </p>
  );

  const techstack = ["Python", "HTML/CSS", "React.js"];

  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-title">About Me</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          {one}
          {two}
          <ul className="tech-stack">
            {techstack.map((techitem, i) => (
              <li key={i}>{techitem}</li>
            ))}
          </ul>
          {three}
        </div>
        <img src="./src/assets/tmp/tmp.jpeg" alt="Temporary" />
      </div>
    </section>
  );
}

export default About;
