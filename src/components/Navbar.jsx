import "../styles/Navbar.css";
import { useTheme } from "./ThemeContext";
import { memo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      {/* Logo */}

      <div className="logo">
        <span className="logo-gradient">Hari</span>.dev
      </div>

      {/* Desktop Navigation */}

      <nav>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

          <li className="mobile-resume">
            <a
              href="/harinath_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Right Side */}

      <div className="nav-buttons">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <a
          href="/harinath_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default memo(Navbar);
