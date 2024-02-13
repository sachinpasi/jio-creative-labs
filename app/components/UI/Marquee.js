"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = ({ children, startFrom, duration, onlyOneDirection }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const containerWidth = marqueeElement.offsetWidth;
    const textWidth = marqueeElement.querySelector(".marquee-text").offsetWidth;

    const tl = gsap.timeline({ repeat: -1 });

    // Move content from left to right

    if (onlyOneDirection) {
      if (startFrom === "left") {
        tl.to(marqueeElement, {
          x: -textWidth, // start from the position where the text is fully hidden on the left
          duration: (textWidth + containerWidth) / 140, // calculate the duration based on the distance to travel
          ease: "linear",
          immediateRender: false,
        });
      }

      // Move content only from right to left
      if (startFrom === "right") {
        tl.to(marqueeElement, {
          x: containerWidth, // start from the position where the text is fully hidden on the right
          duration: (textWidth + containerWidth) / 140, // calculate the duration based on the distance to travel
          ease: "linear",
          immediateRender: false,
        });
      }
    } else {
      if (startFrom === "left") {
        tl.to(marqueeElement, {
          x: -1000,
          duration: duration || 5,
          ease: "linear",
          immediateRender: false,
        })
          .to(marqueeElement, {
            x: 1000,
            duration: duration || 4,
            ease: "linear",
            immediateRender: false,
          })
          .to(marqueeElement, {
            x: -1000,
            duration: duration || 5,
            ease: "linear",
            immediateRender: false,
          });
      }

      if (startFrom === "right") {
        tl.to(marqueeElement, {
          x: -1000,
          duration: 0,
          ease: "linear",
          immediateRender: false,
        })
          .to(marqueeElement, {
            x: 1000,
            duration: duration || 5,
            ease: "linear",
            immediateRender: false,
          })
          .to(marqueeElement, {
            x: -1000,
            duration: duration || 4,
            ease: "linear",
            immediateRender: false,
          })
          .to(marqueeElement, {
            x: 1000,
            duration: duration || 5,
            ease: "linear",
            immediateRender: false,
          });
      }
    }

    return () => tl.kill();
  }, [startFrom, duration, onlyOneDirection]);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div className="marquee-text flex">{children}</div>
    </div>
  );
};

export default Marquee;
