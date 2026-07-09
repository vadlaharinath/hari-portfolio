import { memo } from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      {/* Left Side */}

      <div className="about-left">
        <span className="status-badge">● Available for Opportunities</span>

        <h1 className="about-heading">
          <span className="gradient-text">MERN Full Stack</span>
          Developer
        </h1>
        <p className="about-description">
          Hi, I'm <span className="highlight">Vadla Harinath</span>, a
          passionate MERN Full Stack Developer and Computer Science graduate
          from Sathyabama Institute of Science and Technology. I enjoy turning
          ideas into modern, responsive, and scalable web applications that
          provide an excellent user experience.
        </p>

        <p className="about-description">
          I love learning new technologies, solving challenging problems, and
          building applications that create real value.
        </p>

        <p className="about-description">
          As a fresher, I am actively looking for opportunities where I can
          contribute, grow as a software engineer, and work with talented teams
          to build impactful products.
        </p>
      </div>

      {/* Right Side */}

      <div className="about-right">
        <div className="editor-card">
          <div className="editor-header">
            <div className="editor-dots">
              <span className="red"></span>

              <span className="yellow"></span>

              <span className="green"></span>
            </div>

            <div className="editor-file">developer.js</div>
          </div>

          <div className="editor-body">
            <pre>
              {`const developer = {
  name: "Hari",
  role: "MERN Developer",
  stack: ["React", "Node", "MongoDB"],
  passion: "Building UI",
  available: true
};

developer.build();
`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
