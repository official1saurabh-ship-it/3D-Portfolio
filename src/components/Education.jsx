import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".education-item");

      gsap.from(items, {
        y: 70,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="education" id="education">
      <div className="education-header">
        <p>EDUCATION</p>

        <h2>
          WHERE I
          <br />
          LEARNED.
        </h2>
      </div>

      <div className="education-list">
        <article className="education-item">
          <span className="education-year">2021 — 2025</span>

          <div>
            <h3>B.Tech — Computer Science</h3>

            <h4>Noida Institute of Engineering and Technology</h4>

            <p>
              Focused on computer science, software development, web
              technologies and practical application development.
            </p>
          </div>
        </article>

        <article className="education-item">
          <span className="education-year">2024</span>

          <div>
            <h3>Full Stack Development</h3>

            <h4>Self Learning & Projects</h4>

            <p>
              Built practical applications using React, Node.js, Express and
              MongoDB.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
