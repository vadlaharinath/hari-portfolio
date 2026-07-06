import "../styles/Navbar.css";
import { useTheme } from "./ThemeContext";

function Navbar() {
   const { theme, toggleTheme } = useTheme();
  return (
    <header className="navbar">
      {/* Left */}
      <div className="logo">
        <span className="logo-gradient">Hari</span>.dev
      </div>

      {/* Center */}
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Right */}
      <div className="nav-buttons">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <a href="/harinath_resume.pdf" download className="resume-btn">
          Resume
        </a>
      </div>
    </header>
  );
}

export default Navbar;
