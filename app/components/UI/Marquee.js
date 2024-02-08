"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Marquee = ({ children, startFrom, duration }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const containerWidth = marqueeElement.offsetWidth;
    const textWidth = marqueeElement.querySelector(".marquee-text").offsetWidth;

    const tl = gsap.timeline({ repeat: -1 });

    // Move content from left to right

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

    return () => tl.kill();
  }, [startFrom, duration]);

  return (
    <div className="marquee" ref={marqueeRef}>
      <div className="marquee-text flex">{children}</div>
    </div>
  );
};

export default Marquee;
