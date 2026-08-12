import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Achievements() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // -------------------------
      // CARDS
      // -------------------------

      const cards = gsap.utils.toArray(".achievement-card");

      gsap.from(cards, {
        y: 80,
        opacity: 0,

        duration: 0.8,

        stagger: 0.15,

        ease: "power3.out",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top 70%",

          toggleActions: "play none none none",
        },
      });

      // -------------------------
      // COUNTERS
      // -------------------------

      const counters = gsap.utils.toArray(".counter");

      counters.forEach((counter) => {
        const target = Number(counter.dataset.value);

        const obj = {
          value: 0,
        };

        gsap.to(obj, {
          value: target,

          duration: 2,

          ease: "power2.out",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top 70%",

            once: true,
          },

          onUpdate: () => {
            counter.textContent = Math.floor(obj.value);
          },
        });
      });
    },

    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="achievements" id="achievements">
      <div className="achievements-header">
        <p>ACHIEVEMENTS</p>

        <h2>
          NUMBERS THAT
          <br />
          TELL THE STORY.
        </h2>
      </div>

      <div className="achievement-grid">
        <div className="achievement-card">
          <span>01</span>

          <strong className="counter" data-value="12">
            0
          </strong>

          <p>Landing Pages Built</p>
        </div>

        <div className="achievement-card">
          <span>02</span>

          <strong className="counter" data-value="5">
            0
          </strong>

          <p>Major Projects</p>
        </div>

        <div className="achievement-card">
          <span>03</span>

          <strong className="counter" data-value="10">
            0
          </strong>

          <p>Technologies Explored</p>
        </div>

        <div className="achievement-card">
          <span>04</span>

          <strong className="counter" data-value="1">
            0
          </strong>

          <p>Frontend Internship</p>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
