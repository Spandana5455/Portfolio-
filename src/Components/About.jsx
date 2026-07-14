import React, { useEffect, useRef } from "react";
import "./About.css";
import { gsap } from "gsap";

export default function About() {
  const aboutRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const el = aboutRef.current;

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

  // cursor glow movement
  const handleMouseMove = (e) => {
    const glow = glowRef.current;
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  };
  

  return (
    <section className="about" id="about" onMouseMove={handleMouseMove}>
      
      {/* CURSOR GLOW */}
      <div className="cursorGlow" ref={glowRef}></div>

      <div className="aboutContainer" ref={aboutRef}>

        {/* LEFT */}
        <div className="aboutText">
          <h2 className="aboutHeading">About Me</h2>

          <p className="aboutBio">
            I'm a <span>Frontend Developer</span> specializing in building fast,
            responsive, and scalable web applications using React.js.
          </p>

          <p className="aboutBio">
            I focus on clean UI, performance, and real-world user experience.
            I enjoy turning complex problems into simple, intuitive designs.
          </p>

          <div className="aboutHighlights">
            <div>⚡ React & Modern JS</div>
            <div>🎯 Responsive UI/UX</div>
            <div>🚀 Performance Focused</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="aboutCard">
          <div className="aboutBox">
            <h3>Experience</h3>
            <p>Frontend Developer</p>
          </div>

          <div className="aboutBox">
            <h3>Projects</h3>
            <p>6+ Live Projects</p>
          </div>

          <div className="aboutBox">
            <h3>Tech Stack</h3>
            <p>React, JS, Bootstrap</p>
          </div>
        </div>

      </div>
    </section>
  );
}



