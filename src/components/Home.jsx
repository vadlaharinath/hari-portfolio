import { memo } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight, FaDownload, FaJava } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import SkillsOrbit from "./SkillsOrbit/SkillsOrbit";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      {/* Main Container */}
      <div className="home-container">
        {/* Left Content Side */}
        <div className="left-container">
          {/* Mobile-Only Photo with 4 Floating Skills Badges */}
          <div className="home-mobile-photo">
            <div className="home-mobile-composition">
              <div className="home-mobile-aura" />

              {/* Top-Left: React & Frontend */}
              <div className="home-mob-badge badge-mob-react">
                <SiReact className="mob-badge-icon icon-react" />
                <span>React & Frontend</span>
              </div>

              {/* Top-Right: Java & Spring Boot */}
              <div className="home-mob-badge badge-mob-java">
                <FaJava className="mob-badge-icon icon-java" />
                <span>Java & Spring Boot</span>
              </div>

              {/* Central Photo Ring (slightly larger) */}
              <div className="home-avatar-ring">
                <img
                  src="/hari.jpeg"
                  alt="Vadla Harinath"
                  className="home-avatar-img"
                />
              </div>

              {/* Bottom-Left: Node & Express */}
              <div className="home-mob-badge badge-mob-node">
                <SiNodedotjs className="mob-badge-icon icon-node" />
                <span>Node & Express</span>
              </div>

              {/* Bottom-Right: MongoDB & SQL */}
              <div className="home-mob-badge badge-mob-mongo">
                <SiMongodb className="mob-badge-icon icon-mongo" />
                <span>MongoDB & SQL</span>
              </div>
            </div>
          </div>

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
              Hari <span className="name-gradient">Chari</span>
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
              href="/hari_fullstack_resume.pdf"
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
