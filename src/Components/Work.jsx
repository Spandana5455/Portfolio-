import React, { useEffect, useRef } from "react";
import "./Work.css";
import { gsap } from "gsap";

export default function Work() {
  const workRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const el = workRef.current;

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

  const projects = [
    {
      title: "LKR Technologies",
      desc: "Corporate website with responsive UI and clean design.",
      tech: "React, Bootstrap",
      link: "https://lkrtechnologies.com/",
    },
    {
      title: "LeBestow",
      desc: "Modern business website with optimized performance.",
      tech: "React, CSS",
      link: "https://www.lebestow.com/",
    },
    {
      title: "LKR Imports & Exports",
      desc: "Professional business website with product showcase.",
      tech: "React, Bootstrap",
      link: "https://www.lkrimportsexports.com/",
    },
    {
      title: "JipStay",
      desc: "Hotel booking UI with responsive layouts.",
      tech: "React",
      link: "https://www.jipstay.com/",
    },
    {
      title: "WellMates",
      desc: "Health platform UI built with modern design.",
      tech: "React",
      link: "https://wellmates.vercel.app/",
    },
    {
      title: "LumaSkin",
      desc: "Skincare website with smooth UI interactions.",
      tech: "React",
      link: "https://lumaskin.vercel.app/",
    },
  ];

  return (
    <section
      className="work"
      id="work"
      onMouseMove={handleMouseMove}
    >

      {/* CURSOR GLOW */}
      <div className="cursorGlow" ref={glowRef}></div>

      <div className="workContainer" ref={workRef}>

        <h2 className="workHeading">
          My Work
        </h2>

        <p className="workSub">
          Selected projects showcasing my frontend expertise
        </p>

        <div className="workGrid">
          {projects.map((p, i) => (
            <div className="workCard" key={i}>

              <div className="workContent">
                <h3>{p.title}</h3>

                <p>{p.desc}</p>

                <span className="tech">
                  {p.tech}
                </span>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="viewBtn"
              >
                View Project →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

