import React, { useState, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React and CSS animations to showcase my projects and skills.",
      technologies: ["React", "CSS", "JavaScript", "Docker"],
      image: "#",
      liveLink: "#",
      codeLink: "https://github.com/matiasagado/my-portfolio",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(projectsData);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section" id="projects">
      <div className="section-header">
        <span className="section-title">Pet Projects</span>
      </div>
      <div className="projects-container">
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <div className="more-projects">
        <a
          href="https://github.com/matiasagado"
          target="_blank"
          rel="noopener noreferrer"
          className="github-button"
        >
          See more on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
