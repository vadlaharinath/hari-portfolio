import React, { memo } from "react";
import { TypeAnimation } from "react-type-animation";
import "../styles/Home.css";

function Home() {
  return (
    <section className="home-section" id="home">
      {/* Left Side */}
      <div className="left-container">
        <p className="greeting">Hello, I'm</p>

        <h1 className="name">Hari</h1>

        <h2 className="role">MERN Full Stack Developer</h2>

        <div className="typing-container">
          <span className="const-text">const = </span>

          <TypeAnimation
            sequence={[
              "React.js",
              1500,
              "Java",
              1500,
              "HTML",
              1500,
              "CSS",
              1500,
              "JavaScript",
              1500,
              "Node.js",
              1500,
              "Express.js",
              1500,
              "MongoDB",
              1500,
              "MySQL",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="typing-text"
          />
        </div>

        <p className="description">
          Passionate Full Stack Developer building responsive, scalable and
          modern web applications using the MERN Stack.
        </p>

        <div className="buttons">
          <a href="#projects" className="project-btn">
            View Projects
          </a>

          <a
            href="/harinath_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn-home"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right Side */}

      <div className="right-container">
        {/* Replace with your own image */}
        <img src="/hari.jpeg" loading="lazy" alt="Hari"/>
      </div>
    </section>
  );
}

export default memo(Home);
