import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import useMagnetic from "./useMagnetic";

export default function Hero() {
  const contentRef = useRef(null);
  const glowRef = useRef(null);

  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useMagnetic(btn1Ref);
  useMagnetic(btn2Ref);

  const fullText = "Hi, I'm Spandana";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = contentRef.current;

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
      }
    );
  }, []);

  useEffect(() => {
    if (index < fullText.length) {
      const t = setTimeout(() => {
        setDisplayText((p) => p + fullText[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(t);
    }
  }, [index]);

  const handleMouseMove = (e) => {
    glowRef.current.style.left = e.clientX + "px";
    glowRef.current.style.top = e.clientY + "px";
  };
  

  return (
    <section className="hero" onMouseMove={handleMouseMove}>
      <div className="cursorGlow" ref={glowRef}></div>
      <div className="bgBlur"></div>

      <div className="container">

        <div className="content" ref={contentRef}>
          <p className="intro">⦿ Open to Frontend / React Roles</p>

          <h1 className="heading">
            <span className="typingText">{displayText}</span>
            <span className="cursor"></span>
          </h1>

          <p className="bio">
            Frontend Developer building fast, responsive, production-ready React apps.
          </p>

          <div className="buttons">
            <a ref={btn1Ref} href="#contact" className="primaryBtn magnetic">
              Hire Me
            </a>

            <a  
              ref={btn2Ref} 
              href="/resume.pdf" 
              download 
              target="_blank"
              rel="noreferrer"
              className="secondaryBtn magnetic"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="visual">
          <div className="card">
            <div className="cardHeader">
              <span></span><span></span><span></span>
            </div>

            <div className="cardBody">
              <p>const dev = {"{"}</p>
              <p> name: "Spandana",</p>
              <p> role: "Frontend Dev",</p>
              <p> skills: ["React","JS"]</p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
