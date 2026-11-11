import { memo } from "react";
import { FaGraduationCap, FaCode, FaRocket } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Avatar Composition with Floating Badges (Natural Photo) */}
        <div className="about-avatar-side">
          <div className="about-avatar-composition">
            {/* Ambient Aura Glow */}
            <div className="about-aura-glow" />

            {/* Clean Gradient Ring (NO hue-rotate filter so photo stays 100% natural) */}
            <div className="about-avatar-ring">
              <img
                src="/hari.jpeg"
                loading="eager"
                alt="Vadla Harinath"
                className="about-avatar-img"
              />
            </div>

            {/* Floating Tech Badges showing Full Stack & Java Expertise */}
            <div className="floating-badge badge-react">
              <SiReact className="badge-icon icon-react" />
              <span>React & Frontend</span>
            </div>

            <div className="floating-badge badge-java">
              <FaJava className="badge-icon icon-java" />
              <span>Java & Spring Boot</span>
            </div>

            <div className="floating-badge badge-node">
              <SiNodedotjs className="badge-icon icon-node" />
              <span>Node & Express</span>
            </div>

            <div className="floating-badge badge-mongo">
              <SiMongodb className="badge-icon icon-mongo" />
              <span>MongoDB & SQL</span>
            </div>
          </div>
        </div>

        {/* Right Side: Bio, Highlights & Expertise */}
        <div className="about-content-side">
          <div className="section-tag">
            <span className="tag-dot" />
            <span>ABOUT ME</span>
          </div>

          <h2 className="about-heading">
            <span className="gradient-text">Full Stack</span> Developer
          </h2>

          <div className="bio-card">
            <p className="about-description">
              Hi, I'm <span className="highlight">vadla hari</span>, a
              passionate Full Stack Developer and Computer Science graduate from{" "}
              <span className="institution">
                Sathyabama Institute of Science and Technology
              </span>
              . I have solid, hands-on knowledge across both{" "}
              <strong style={{ color: "#4338ca" }}>MERN Stack</strong> (React,
              Node.js, Express, MongoDB) and{" "}
              <strong style={{ color: "#b45309" }}>Java Full Stack</strong> (Java,
              Spring Boot, MySQL, REST APIs) architectures.
            </p>

            <p className="about-description">
              I am actively interested in <strong>Freelance Projects</strong> as
              well as full-time software engineering roles. Whether you need an
              end-to-end web application built from scratch or a dedicated
              developer for your team, I am ready to collaborate and deliver.
            </p>
          </div>

          {/* Key Value Highlights Grid */}
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon icon-grad">
                <FaGraduationCap />
              </div>
              <div className="highlight-text">
                <h4>B.E. Computer Science</h4>
                <p>Sathyabama Institute</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon icon-stack">
                <FaCode />
              </div>
              <div className="highlight-text">
                <h4>Full Stack Expertise</h4>
                <p>MERN & Java Stack</p>
              </div>
            </div>

            <div className="highlight-item">
              <div className="highlight-icon icon-ready">
                <FaRocket />
              </div>
              <div className="highlight-text">
                <h4>Open for Opportunities</h4>
                <p>Full-Time & Freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
