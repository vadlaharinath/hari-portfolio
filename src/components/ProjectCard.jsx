import { memo } from "react";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";
import "../styles/ProjectCard.css";

function ProjectCard({ project, index = 0 }) {
  const gradients = [
    "linear-gradient(135deg, #6366f1, #8b5cf6)",
    "linear-gradient(135deg, #06b6d4, #3b82f6)",
    "linear-gradient(135deg, #10b981, #06b6d4)",
    "linear-gradient(135deg, #f43f5e, #ec4899)",
  ];

  const cardGradient = gradients[index % gradients.length];

  return (
    <div className="project-card" style={{ "--card-accent": cardGradient }}>
      {/* Top Header */}
      <div className="card-top-bar">
        <div className="project-folder-icon">
          <FaFolder />
        </div>

        <span className="project-number">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      {/* Project Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Technologies Used */}
      <div className="tech-container">
        {project.technologies.map((tech, tIdx) => (
          <span className="tech-badge" key={tIdx}>
            {tech}
          </span>
        ))}
      </div>

      {/* Card Actions */}
      <div className="card-footer">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="github-action-btn"
        >
          <FaGithub className="btn-icon" />
          <span>Source Code</span>
          <FaExternalLinkAlt className="btn-ext" />
        </a>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
