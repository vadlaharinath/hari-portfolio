import { memo } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SkillsOrbit from "./SkillsOrbit/SkillsOrbit";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      {/* Main Container */}
      <div className="home-container">
        {/* Left Content Side */}
        <div className="left-container">
          {/* Status Badge */}
          <div className="status-pill">
            <span className="status-ping" />
            <span className="status-dot" />
            <span className="status-text">Available for Full-Time Roles & Freelance Projects</span>
          </div>

          {/* Heading with Greeting */}
          <div className="name-block">
            <p className="greeting">Hello, I'm</p>
            <h1 className="name">
              Vadla <span className="name-gradient">Harinath</span>
            </h1>
          </div>

          <h2 className="role">Full Stack Developer</h2>

          {/* Interactive Code Typing Terminal */}
          <div className="typing-box">
            <div className="typing-header">
              <span className="terminal-dot dot-red" />
              <span className="terminal-dot dot-yellow" />
              <span className="terminal-dot dot-green" />
              <span className="terminal-file">skills.config.ts</span>
            </div>

            <div className="typing-body">
              <span className="code-keyword">const</span>{" "}
              <span className="code-var">technologies</span> = [
              <div className="type-anim-wrap">
                <span className="code-quote">"</span>
                <TypeAnimation
                  sequence={[
                    "React.js",
                    1500,
                    "Java",
                    1500,
                    "Node.js",
                    1500,
                    "Express.js",
                    1500,
                    "MongoDB",
                    1500,
                    "Spring Boot",
                    1500,
                    "JavaScript",
                    1500,
                    "HTML5 & CSS3",
                    1500,
                    "REST APIs",
                    1500,
                    "MySQL",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="typing-text"
                />
                <span className="code-quote">"</span>
              </div>
              ];
            </div>
          </div>

          <p className="description">
            Passionate Full Stack Developer with hands-on expertise across both
            MERN and Java Full Stack ecosystems. Experienced in building responsive,
            scalable web applications and actively interested in full-time roles as
            well as freelance projects.
          </p>

          {/* Action Buttons */}
          <div className="buttons">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <FaArrowRight className="btn-arrow" />
            </a>

            <a
              href="/harinath_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaDownload className="btn-download" />
              <span>Resume</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-number">Full Stack</span>
              <span className="stat-label">MERN & Java</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">Freelance</span>
              <span className="stat-label">Ready for Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">B.E. CSE</span>
              <span className="stat-label">Graduate</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Skills Mastered</span>
            </div>
          </div>
        </div>

        {/* Right Side: 3D Skills Orbit (Seamless & Transparent) */}
        <div className="right-container home-orbit-container">
          <SkillsOrbit />
        </div>
      </div>
    </section>
  );
}

export default memo(Home);
