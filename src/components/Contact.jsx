import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Contact() {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const button = buttonRef.current;

      // =========================
      // MAGNETIC BUTTON
      // =========================

      const buttonXTo = gsap.quickTo(button, "x", {
        duration: 0.4,
        ease: "power3.out",
      });

      const buttonYTo = gsap.quickTo(button, "y", {
        duration: 0.4,
        ease: "power3.out",
      });

      const handleButtonMove = (e) => {
        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        buttonXTo(x * 1);
        buttonYTo(y * 1);
      };

      const handleButtonLeave = () => {
        buttonXTo(0);
        buttonYTo(0);
      };

      button.addEventListener("mousemove", handleButtonMove);

      button.addEventListener("mouseleave", handleButtonLeave);

      // =========================
      // CLEANUP
      // =========================

      return () => {
        button.removeEventListener("mousemove", handleButtonMove);

        button.removeEventListener("mouseleave", handleButtonLeave);
      };
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section ref={sectionRef} className="contact" id="contact">
      <div className="contact-content">
        <p className="contact-label">HAVE A PROJECT IN MIND?</p>

        <h2 className="contact-title">
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          GREAT.
        </h2>

        <p className="contact-description">
          I'm always interested in working on interesting projects and creating
          meaningful digital experiences.
        </p>

        <div className="contact-button-wrapper  ">
          <button
            ref={buttonRef}
            data-cursor="Hello"
            className="contact-button cursor-hover "
            data-cursor-scale="6"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
