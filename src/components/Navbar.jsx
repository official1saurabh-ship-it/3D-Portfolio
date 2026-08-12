import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact", id: "contact" },
  ];

  // =================================
  // NAVBAR SHOW / HIDE ON SCROLL
  // =================================

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Page ke top par navbar visible rahega
      if (currentScrollY <= 50) {
        gsap.to(navbarRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power3.out",
        });

        lastScrollY = currentScrollY;
        return;
      }

      // Scroll DOWN
      if (currentScrollY > lastScrollY) {
        gsap.to(navbarRef.current, {
          y: -120,
          duration: 0.4,
          ease: "power3.out",
        });
      }

      // Scroll UP
      else {
        gsap.to(navbarRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =================================
  // NAVIGATION
  // =================================

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav ref={navbarRef} className="navbar">
      <div className="navbar-logo">SAURABH</div>

      <div className="navbar-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigation(item.id)}
            className="navbar-link cursor-hover"
            data-cursor="GO"
            data-cursor-scale="2"
          >
            {item.name}
          </button>
        ))}
      </div>

      <button className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
        MENU
      </button>
    </nav>
  );
}

export default Navbar;
