import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GlobalParallax() {
  useGSAP(() => {
    const background = document.querySelector(".global-parallax-background");

    if (!background) return;

    gsap.to(background, {
      y: -500,
      ease: "none",

      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });

  return (
    <div className="global-parallax-background">
      <div className="parallax-blob blob-one"></div>

      <div className="parallax-blob blob-two"></div>

      <div className="parallax-blob blob-three"></div>
    </div>
  );
}

export default GlobalParallax;
