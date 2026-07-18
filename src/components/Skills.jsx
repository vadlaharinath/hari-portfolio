import React, { memo } from "react";
import SkillsOrbit from "./SkillsOrbit";
import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* Left Side */}

      <div className="skills-left">

        <span className="skills-badge">
          MY SKILLS
        </span>

        <h1 className="skills-title">
          Technologies
          <br />
          <span>I Work With</span>
        </h1>
        <br/>

        {/* Frontend */}

        <div className="skill-category">

          <h3>Frontend</h3>

          <div className="skill-tags">

            <span>React.js</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>Context API</span>

          </div>

        </div>

        {/* Backend */}

        <div className="skill-category">

          <h3>Backend</h3>

          <div className="skill-tags">

            <span>Node.js</span>
            <span>Express.js</span>
            <span>Spring</span>
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>JWT</span>

          </div>

        </div>

        {/* Database */}

        <div className="skill-category">

          <h3>Database</h3>

          <div className="skill-tags">

            <span>MongoDB</span>
            <span>MySQL</span>

          </div>

        </div>

        {/* Programming */}

        <div className="skill-category">

          <h3>Programming</h3>

          <div className="skill-tags">

            <span>Java</span>

          </div>

        </div>

        {/* Tools */}

        <div className="skill-category">

          <h3>Tools</h3>

          <div className="skill-tags">

            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Postman</span>

          </div>

        </div>

        {/* Other Skills */}

        <div className="skill-category">

          <h3>Other</h3>

          <div className="skill-tags">

            <span>Data Structures</span>
            <span>OOP</span>
            <span>SDLC</span>
            <span>Agile</span>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="skills-right">

        <SkillsOrbit />

      </div>

    </section>
  );
}

export default memo(Skills);