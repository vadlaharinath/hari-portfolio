import { memo } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaArrowRight,
  FaDownload,
  FaJava,
  FaAws,
  FaCube,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiBootstrap,
  SiMongodb,
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
import "../styles/Home.css";

// All 24 authentic skills configured around the 3D Earth
const EARTH_TICKER_SKILLS = [
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

          {/* Mobile & Tablet Only: Earth Skills Ticker moving left to right */}
          <div className="home-skills-ticker" aria-label="Earth Skills Marquee">
            <div className="home-ticker-track">
              {EARTH_TICKER_SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={`skill-track1-${idx}`} className="home-ticker-chip">
                    <Icon className="home-ticker-icon" style={{ color: skill.color }} />
                    <span className="home-ticker-label">{skill.name}</span>
                  </div>
                );
              })}
              {EARTH_TICKER_SKILLS.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={`skill-track2-${idx}`} className="home-ticker-chip">
                    <Icon className="home-ticker-icon" style={{ color: skill.color }} />
                    <span className="home-ticker-label">{skill.name}</span>
                  </div>
                );
              })}
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
