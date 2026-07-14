import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* BACKGROUND GLOW */}
      <div className="footerGlow footerGlow1"></div>
      <div className="footerGlow footerGlow2"></div>

      <div className="footerContainer">

        {/* LEFT */}
        <div className="footerBrand">

          <h2 className="footerLogo">
            <span>&lt;</span>
            GS
            <span>&gt;</span>
          </h2>

          <p className="footerText">
            Frontend Developer crafting modern,
            responsive and high-performance
            digital experiences using React.js.
          </p>

          {/* STATUS */}
          <div className="footerStatus">
            <span className="statusDot"></span>
            Available for opportunities
          </div>

        </div>

        {/* CENTER */}
        <div className="footerLinks">

          <div className="footerColumn">
            <h4>Navigation</h4>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footerColumn">
            <h4>Socials</h4>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            {/* <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>  */}
          </div>

        </div>

        {/* RIGHT */}
        <div className="footerCTA">

          <h3>
            Let's build something amazing.
          </h3>

          <a
            href="mailto:yourmail@gmail.com"
            className="footerBtn"
          >
            Get In Touch
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footerBottom">

        <p>
          © 2026 Spandana. All rights reserved.
        </p>

        <p>
          Built with React.js ✨
        </p>

      </div>

    </footer>
  );
}


