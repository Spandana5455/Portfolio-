import React, { useEffect, useRef } from "react";
import "./Contact.css";
import { gsap } from "gsap";

export default function Contact() {
  const contactRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const el = contactRef.current;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  // CURSOR GLOW
  const handleMouseMove = (e) => {
    const glow = glowRef.current;

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  };

  return (
    <section
      className="contact"
      id="contact"
      onMouseMove={handleMouseMove}
    >

      {/* CURSOR GLOW */}
      <div className="cursorGlow" ref={glowRef}></div>

      <div className="contactContainer" ref={contactRef}>

        <p className="contactTag">
          🚀 Let's Build Something Great
        </p>

        <h2 className="contactHeading">
          Let's work together
        </h2>

        <p className="contactSub">
          Open to frontend, React.js and UI-focused opportunities.
        </p>

        {/* ACTIONS */}
        <div className="contactActions">

          <a
            href="mailto:spandanagodishala1@gmail.com"
            className="contactBtn primary"
          >
            Email Me
          </a>

          <a
            href="https://wa.me/918143445050"
            target="_blank"
            rel="noreferrer"
            className="contactBtn secondary"
          >
            WhatsApp
          </a>

        </div>

        {/* SOCIALS */}
        <div className="socials">

          <a
            href="https://github.com/Spandana5455"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            GitHub
          </a>

          <a
            href="www.linkedin.com/in/godishalaspandana"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            LinkedIn
          </a>

          {/* <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            Twitter
          </a> */}

        </div>

      </div>
    </section>
  );
} 

