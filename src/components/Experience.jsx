import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Experience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Timeline progress line
      const line = sectionRef.current.querySelector(".experience-progress");

      gsap.fromTo(
        line,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "bottom 100%",
            scrub: true,
          },

          ease: "none",
        },
      );

      // Experience cards
      const items = gsap.utils.toArray(".experience-item");

      items.forEach((item) => {
        gsap.from(item.querySelector(".experience-content"), {
          x: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },

    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="experience" id="experience">
      <div className="experience-header">
        <p>EXPERIENCE</p>

        <h2>MY JOURNEY</h2>
      </div>

      <div className="timeline">
        <div className="timeline-line">
          <div className="experience-progress"></div>
        </div>

        <article className="experience-item">
          <div className="experience-dot"></div>

          <div className="experience-content">
            <span className="experience-year">2026</span>

            <h3>Frontend Developer Intern</h3>

            <h4>Biosoftech Solution Private Limited</h4>

            <p>
              Worked on responsive frontend interfaces using React.js and
              Tailwind CSS. Built landing pages and interactive web experiences.
            </p>
          </div>
        </article>

        <article className="experience-item">
          <div className="experience-dot"></div>

          <div className="experience-content">
            <span className="experience-year">2025</span>

            <h3>B.Tech — Computer Science</h3>

            <h4>Noida Institute of Engineering and Technology</h4>

            <p>
              Focused on software development, web technologies and building
              practical projects.
            </p>
          </div>
        </article>

        <article className="experience-item">
          <div className="experience-dot"></div>

          <div className="experience-content">
            <span className="experience-year">2024</span>

            <h3>Full Stack Development</h3>

            <h4>Personal Projects</h4>

            <p>
              Built applications using React, Node.js, Express and MongoDB while
              exploring modern web development.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;
