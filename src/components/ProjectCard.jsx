import "../styles/ProjectCard.css";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* Project Number */}

      <span className="project-number">
        {String(project.id).padStart(2, "0")}
      </span>

      {/* Project Title */}

      <h2 className="project-title">
        {project.title}
      </h2>

      {/* Technologies */}

      <div className="tech-container">
        {project.technologies.map((tech, index) => (
          <span className="tech-badge" key={index}>
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}

      <p className="project-description">
        {project.description}
      </p>

      {/* GitHub Link */}

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub className="github-icon" />
        View on GitHub
      </a>

    </div>
  );
}

export default ProjectCard;