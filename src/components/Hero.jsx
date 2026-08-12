import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-intro", {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
    })

      .from(
        ".hero-name",
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.3",
      )

      .from(
        ".hero-role",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )

      .from(
        ".hero-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      )

      .from(
        ".hero-button",
        {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "back.out",
        },
        "-=0.2",
      );
  });

  return (
    <section className="hero">
      <p className="hero-intro">HELLO, I'M</p>

      <h1 className="hero-name">SAURABH BHARADWAJ</h1>

      <h2 className="hero-role">FRONTEND DEVELOPER</h2>

      <p className="hero-description">
        I create interactive digital experiences for the modern web.
      </p>

      <button className="hero-button">VIEW PROJECTS</button>
    </section>
  );
}

export default Hero;
