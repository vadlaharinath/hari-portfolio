import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";
import { memo } from "react";

function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* Heading */}

      <div className="projects-header">

        <span className="projects-badge">
          FEATURED PROJECTS
        </span>

        <h1 className="projects-title">
          Projects
          <span> I've Built</span>
        </h1>

        <p className="projects-description">
          Here are some of my recent projects built using modern web
          technologies. Each project helped me improve my problem-solving,
          full-stack development, and UI design skills.
        </p>

      </div>

      {/* Auto Slider */}

      <div className="projects-slider">

        <div className="projects-track">

          {/* First Set */}

          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

          {/* Duplicate Set For Infinite Loop */}

          {projectsData.map((project) => (
            <ProjectCard
              key={`duplicate-${project.id}`}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default memo(Projects);