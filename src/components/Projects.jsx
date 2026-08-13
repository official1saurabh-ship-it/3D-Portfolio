import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import fitness from "../projects/fitness.jpg";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const container = containerRef.current;

      // Total horizontal distance
      const amount = container.scrollWidth - window.innerWidth;

      // --------------------------------
      // 1. IMAGE HOVER ZOOM
      // --------------------------------

      const images = gsap.utils.toArray(".project-image");

      const imageCleanups = [];

      images.forEach((image) => {
        const scaleTo = gsap.quickTo(image, "scale", {
          duration: 0.5,
          ease: "power3.out",
        });

        const handleMouseEnter = () => {
          scaleTo(1.1);
        };

        const handleMouseLeave = () => {
          scaleTo(1);
        };

        image.addEventListener("mouseenter", handleMouseEnter);

        image.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup
        imageCleanups.push(() => {
          image.removeEventListener("mouseenter", handleMouseEnter);

          image.removeEventListener("mouseleave", handleMouseLeave);
        });
      });

      // --------------------------------
      // 2. MAIN HORIZONTAL SCROLL
      // --------------------------------

      gsap.to(container, {
        x: -amount,

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: `+=${amount}`,

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });

      // --------------------------------
      // 3. CARD HOVER
      // --------------------------------

      const cards = gsap.utils.toArray(".project-card");

      const cardCleanups = [];

      cards.forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.4,
            ease: "power3.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);

        card.addEventListener("mouseleave", handleMouseLeave);

        cardCleanups.push(() => {
          card.removeEventListener("mouseenter", handleMouseEnter);

          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });

      // --------------------------------
      // 4. IMAGE PARALLAX
      // --------------------------------

      images.forEach((image, index) => {
        const movement = index % 2 === 0 ? -8 : -12;

        gsap.to(image, {
          xPercent: movement,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top top",

            end: `+=${amount}`,

            scrub: 1,
          },
        });
      });

      // --------------------------------
      // CLEANUP
      // --------------------------------

      return () => {
        imageCleanups.forEach((cleanup) => {
          cleanup();
        });

        cardCleanups.forEach((cleanup) => {
          cleanup();
        });
      };
    },

    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="projects" id="projects">
      <div ref={containerRef} className="projects-container">
        {/* PROJECT 01 */}

        <article className="project-card">
          <div className="project-number">01</div>

          <div className="project-image-wrapper">
            <img
              className="project-image cursor-hover"
              data-cursor="SHOW"
              data-cursor-scale="6"
              src={fitness}
              alt="AI Fitness Trainer"
            />
          </div>

          <div className="project-info">
            <p className="project-category">AI / WEB APPLICATION</p>

            <h2>AI FITNESS TRAINER</h2>

            <p>
              An AI-powered fitness platform providing personalized workout and
              diet recommendations.
            </p>

            <div className="project-tech">React · Node.js · MongoDB</div>
          </div>
        </article>

        {/* PROJECT 02 */}

        <article className="project-card">
          <div className="project-number">02</div>

          <div className="project-image-wrapper">
            <img
              className="project-image cursor-hover"
              src="/projects/portfolio.png"
              data-cursor="SHOW"
              data-cursor-scale="6"
              alt="3D Portfolio Website"
            />
          </div>

          <div className="project-info">
            <p className="project-category">3D / FRONTEND</p>

            <h2>3D PORTFOLIO WEBSITE</h2>

            <p>
              An interactive 3D portfolio with smooth scroll animations and a
              modern immersive interface.
            </p>

            <div className="project-tech">React · GSAP · Three.js</div>
          </div>
        </article>

        {/* PROJECT 03 */}

        <article className="project-card">
          <div className="project-number">03</div>

          <div className="project-image-wrapper">
            <img
              className="project-image cursor-hover"
              src="/projects/ecommerce.png"
              data-cursor="SHOW"
              data-cursor-scale="6"
              alt="E-Commerce Platform"
            />
          </div>

          <div className="project-info">
            <p className="project-category">E-COMMERCE / FULL STACK</p>

            <h2>E-COMMERCE PLATFORM</h2>

            <p>
              A full-featured online store with product catalog, cart and secure
              checkout experience.
            </p>

            <div className="project-tech">Next.js · PostgreSQL · Stripe</div>
          </div>
        </article>

        {/* PROJECT 04 */}

        <article className="project-card">
          <div className="project-number">04</div>

          <div className="project-image-wrapper">
            <img
              className="project-image cursor-hover"
              src="/projects/chat.png"
              data-cursor="SHOW"
              data-cursor-scale="6"
              alt="Real-Time Chat App"
            />
          </div>

          <div className="project-info">
            <p className="project-category">REAL-TIME / WEB APPLICATION</p>

            <h2>REAL-TIME CHAT APP</h2>

            <p>
              A real-time messaging application with instant delivery,
              notifications and message history.
            </p>

            <div className="project-tech">React · Socket.io · Firebase</div>
          </div>
        </article>

        {/* PROJECT 05 */}

        <article className="project-card">
          <div className="project-number">05</div>

          <div className="project-image-wrapper">
            <img
              className="project-image cursor-hover"
              src="/projects/dashboard.png"
              data-cursor="SHOW"
              data-cursor-scale="6"
              alt="Analytics Dashboard"
            />
          </div>

          <div className="project-info">
            <p className="project-category">DATA / WEB APPLICATION</p>

            <h2>ANALYTICS DASHBOARD</h2>

            <p>
              A data visualization dashboard with real-time charts and export
              capabilities for business insights.
            </p>

            <div className="project-tech">React · D3.js · Express</div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
