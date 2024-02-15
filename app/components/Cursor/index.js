import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { isSmallScreen } from "@/app/page";
import Icon from "../UI/Icon";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden select-none pointer-events-none z-50 ",
};

const Cursor = ({ isDesktop = true }) => {
  const cursor = useRef(null);

  useEffect(() => {
    let diff = 0;

    const calculateDiff = () => {
      if (window.innerWidth > 1920) {
        diff = (window.innerWidth - 1920) / 2;
      } else {
        diff = 0;
      }
    };

    const onHover = () => {
      gsap.to(cursor.current, {
        scale: 0.5,
        duration: 0.3,
      });
    };

    const onUnhover = () => {
      gsap.to(cursor.current, {
        scale: 1,
        duration: 0.3,
      });
    };

    const moveCircle = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX - 50 - diff,
        y: e.clientY - 50,
        duration: 0.05,
        ease: Linear.easeNone,
      });
    };

    const initCursorAnimation = () => {
      cursor.current.classList.remove("hidden");

      document.querySelectorAll(".link").forEach((el) => {
        el.addEventListener("mouseenter", onHover);
        el.addEventListener("mouseleave", onUnhover);
      });

      document.addEventListener("mousemove", moveCircle);
    };

    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }

    calculateDiff(); // Calculate diff initially

    window.addEventListener("resize", calculateDiff);

    return () => {
      window.removeEventListener("resize", calculateDiff);

      document.querySelectorAll(".link").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });

      document.removeEventListener("mousemove", moveCircle);
    };
  }, [isDesktop]);

  return (
    <>
      <div ref={cursor} className={`${CURSOR_STYLES.CURSOR}`}>
        <div className="animate-spin-slow mt-4">
          <Icon
            className="animate-scale "
            name="LOGO_ROUND"
            width="100"
            height="100"
          />
        </div>
      </div>
    </>
  );
};

export default Cursor;
