import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function CustomCursor() {
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    const cursorText = cursor.querySelector("span");

    // =========================
    // CURSOR MOVEMENT
    // =========================

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // =========================
    // HOVER ELEMENTS
    // =========================

    const elements = gsap.utils.toArray(".cursor-hover");

    const handleEnter = (e) => {
      const text = e.currentTarget.dataset.cursor || "VIEW";

      const scale = Number(e.currentTarget.dataset.cursorScale) || 4;

      cursorText.textContent = text;

      gsap.to(cursor, {
        scale: scale,

        duration: 0.4,

        ease: "power3.out",
      });

      gsap.to(cursorText, {
        opacity: 1,

        duration: 0.2,
      });
    };

    const handleLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(cursorText, {
        opacity: 0,
        duration: 0.2,
      });
    };

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);

      element.addEventListener("mouseleave", handleLeave);
    });

    // =========================
    // CLEANUP
    // =========================

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);

        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  });

  return (
    <div ref={cursorRef} className="cursor">
      <span>VIEW</span>
    </div>
  );
}

export default CustomCursor;
