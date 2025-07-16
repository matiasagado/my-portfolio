import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">Matias Agado</span>
        <div className="logo-dot"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/matiasagado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
            </a>
          </li>
        </ul>
      </nav>

      <button className="menu-toggle">
        <div className="menu-icon"></div>
      </button>
    </header>
  );
}

export default Header;
