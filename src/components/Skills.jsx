import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".skill-card");

      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      cards.forEach((card) => {
        const xTo = gsap.quickTo(card, "x", {
          duration: 0.4,
          ease: "power3.out",
        });

        const yTo = gsap.quickTo(card, "y", {
          duration: 0.4,
          ease: "power3.out",
        });

        const handleMove = (e) => {
          const rect = card.getBoundingClientRect();

          const x = e.clientX - rect.left - rect.width / 2;

          const y = e.clientY - rect.top - rect.height / 2;

          xTo(x * 0.08);
          yTo(y * 0.08);
        };

        const handleEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleLeave = () => {
          xTo(0);
          yTo(0);

          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMove);
        card.addEventListener("mouseenter", handleEnter);
        card.addEventListener("mouseleave", handleLeave);
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="skills" className="skills">
      <div className="skills-header">
        <p>MY SKILLS</p>

        <h2>
          TECHNOLOGIES I
          <br />
          WORK WITH.
        </h2>
      </div>

      <div className="skills-grid">
        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>01</span>
          <h3>HTML</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>02</span>
          <h3>CSS</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>03</span>
          <h3>JAVASCRIPT</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>04</span>
          <h3>REACT</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>05</span>
          <h3>TAILWIND</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>06</span>
          <h3>NODE.JS</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>07</span>
          <h3>EXPRESS</h3>
        </div>

        <div
          className="skill-card cursor-hover"
          data-cursor="TECH"
          data-cursor-scale="6"
        >
          <span>08</span>
          <h3>MONGODB</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills;
