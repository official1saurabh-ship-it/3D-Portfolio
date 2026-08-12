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

function App() {
  return (
    <>
      <CustomCursor />
      <GlobalParallax />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
