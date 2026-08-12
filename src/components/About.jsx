import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);
const About = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create(".about-title", {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".about-label", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    })

      .from(
        splitTitle.words,
        {
          y: 80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.2",
      )

      .from(
        ".about-description",
        {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.3",
      )

      .from(
        ".about-goal",
        {
          y: 50,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2",
      );
  });

  return (
    <section id="about" className="about">
      <div className="about-content">
        <p className="about-label">ABOUT ME</p>

        <h2 className="about-title">I BUILD DIGITAL EXPERIENCES.</h2>

        <p className="about-description">
          I'm a passionate Frontend Developer who enjoys turning ideas into
          interactive and engaging digital experiences.
        </p>

        <p className="about-description">
          I work primarily with HTML, CSS, JavaScript, React.js and Tailwind
          CSS.
        </p>

        <div className="about-goal">
          <h3>MY GOAL</h3>

          <p>
            My goal is to combine clean engineering with exceptional user
            experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
