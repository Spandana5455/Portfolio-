import React, { useEffect, useRef } from "react";
import "./Skills.css";
import { gsap } from "gsap";

export default function Skills() {
  const skillsRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const el = skillsRef.current;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
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

  const skills = [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "GSAP",
    "Git & GitHub",
    "Firebase",
    "REST APIs",
    "Node.js",
    "UI/UX",
  ];

  return (
    <section
      className="skills"
      id="skills"
      onMouseMove={handleMouseMove}
    >

      {/* CURSOR GLOW */}
      <div className="cursorGlow" ref={glowRef}></div>

      <div className="skillsContainer" ref={skillsRef}>

        {/* <p className="skillsTag">⚡ Tech Stack</p> */}

        <h2 className="skillsHeading">
          Skills & Technologies
        </h2>

        <p className="skillsSub">
          Tools and technologies I use to build modern web experiences.
        </p>

        <div className="skillsGrid">
          {skills.map((skill, index) => (
            <div className="skillCard" key={index}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


