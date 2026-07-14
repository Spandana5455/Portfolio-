import React, { useState, useRef } from "react";
import "./Navbar.css";
import useMagnetic from "./useMagnetic";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["About", "Work","Skills", "Contact"];

  const cvRef = useRef(null);
  useMagnetic(cvRef);

  return (
    <nav className="nav">
      <div className="inner">

        {/* LOGO */}
        <a href="#" className="logo">
          &lt;GS&gt;
        </a>

        {/* DESKTOP LINKS */}
        <ul className="links desktop">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="link">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT CONTROLS */}
        <div className="rightControls">

          {/* THEME TOGGLE */}
          <button
            className="themeToggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* DESKTOP CV BUTTON */}
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            ref={cvRef}
            className="cvBtn magnetic desktop"
          >
            Download CV
          </a>

          {/* HAMBURGER */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <ul className={`links mobile ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="link"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}

          <li>
          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="cvBtn"
          >
            Download CV
          </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
