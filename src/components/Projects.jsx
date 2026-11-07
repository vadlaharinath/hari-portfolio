import { memo } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>PORTFOLIO WORK</span>
          </div>

          <h2 className="projects-title">
            Featured <span className="projects-gradient">Projects</span>
          </h2>

          <p className="projects-description">
            A selection of modern web applications I've designed and engineered.
            Focused on clean architecture, scalable APIs, and intuitive user experiences.
          </p>
        </div>

        {/* Projects Slider Track */}
        <div className="projects-slider-wrapper">
          <div className="projects-track">
            {/* First Set */}
            {projectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}

            {/* Duplicate Set For Smooth Infinite Loop */}
            {projectsData.map((project, index) => (
              <ProjectCard
                key={`dup-${project.id}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
