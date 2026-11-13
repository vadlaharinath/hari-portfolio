import { memo } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaJava,
  FaAws,
  FaCube,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiExpress,
  SiBootstrap,
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";
import {
  TbApi,
  TbBinaryTree,
  TbInfinity,
  TbBrandVscode,
} from "react-icons/tb";
import SkillsOrbit from "./SkillsOrbit/SkillsOrbit";
import "../styles/About.css";

// Skills that stream from right to left in laptop view and disappear at the user's image
const ABOUT_STREAM_SKILLS = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Java", icon: FaJava, color: "#EA580C" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
  { name: "Express.js", icon: SiExpress, color: "#0284C7" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#00758F" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Spring", icon: SiSpring, color: "#6DB33F" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "REST API", icon: TbApi, color: "#0284C7" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Agile", icon: TbInfinity, color: "#10B981" },
  { name: "DSA", icon: TbBinaryTree, color: "#06B6D4" },
  { name: "OOP", icon: FaCube, color: "#A855F7" },
  { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
];

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
              Hi, I'm <span className="highlight">Hari</span>, a
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

          {/* Key Value Highlights Grid (Mobile and Tablet View Only) */}
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

          {/* Laptop View Only: Skills stream moving right-to-left towards avatar image and disappearing */}
          <div className="about-skills-stream" aria-label="Skills Stream">
            <div className="about-stream-track">
              {ABOUT_STREAM_SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={`about-chip-1-${idx}`} className="about-stream-chip">
                    <Icon className="about-stream-icon" style={{ color: skill.color }} />
                    <span className="about-stream-label">{skill.name}</span>
                  </div>
                );
              })}
              {ABOUT_STREAM_SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={`about-chip-2-${idx}`} className="about-stream-chip">
                    <Icon className="about-stream-icon" style={{ color: skill.color }} />
                    <span className="about-stream-label">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile-Only Earth Animation below content */}
          <div className="about-mobile-orbit">
            <SkillsOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(About);
