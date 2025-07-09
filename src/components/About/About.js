import React from "react";
import "./About.css";

function About() {
  const one = (
    <p>
      I am currently a <b>Senior</b> at the{" "}
      <a href="https://www.usfca.edu/">University of San Francisco</a>, pursuing
      a<b> Bachelor's of Science</b> in <b>Computer Science</b>. I'm passionate
      about software development and always eager to explore new technologies
      and tackle real-world problems.
    </p>
  );

  const two = (
    <p>
      Outside of coursework, I'm interested in following the developments of
      science. I also like to play Lacrosse.
    </p>
  );

  const tech_stack = [
    "React.js",
    "JavaScript",
    "C",
    "Python",
    "SQLite",
    "HTML/CSS",
  ];

  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-title">About Me</span>
      </div>
      <div className="about-content">
        <div className="about-description">
          {one}
          <p>Here are some technologies I've been working with:</p>
          <ul className="tech-stack">
            {tech_stack.map((tech_item, i) => (
              <li key={i}>{tech_item}</li>
            ))}
          </ul>
          {two}
        </div>
        <img src="/assets/tmp.jpeg" alt="Temporary" />
      </div>
    </section>
  );
}

export default About;
