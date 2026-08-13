import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import GlobalParallax from "./components/GlobalParallax";
import myimage from "./assets/my-image.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(() => {
    gsap.to(".background-image", {
      y: -80,
      scale: 1.05,

      ease: "none",

      scrollTrigger: {
        trigger: ".portfolio",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });
  return (
    <main className="portfolio">
      {/* BACKGROUND */}
      <div className="background-image">
        <img src={myimage} alt="" />
        <div className="background-overlay"></div>
      </div>
      <div className="foreground">
        <GlobalParallax />

        <CustomCursor />

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Education />

        <Achievements />

        <Contact />
      </div>
    </main>
  );
}

export default App;
