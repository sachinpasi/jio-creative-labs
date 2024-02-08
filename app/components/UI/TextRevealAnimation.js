"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const colors = {
  primary: "#03007F", // Custom primary color
  secondary: "#FF2E63", // Custom secondary color
  "secondary-2": "#00C0CC",
};

const TextRevealAnimation = ({ words, classNames, fontSize }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const wordsElements = containerRef.current.children;

    gsap.set(wordsElements, { opacity: 0, y: "10%" });

    let tl = gsap.timeline({ repeat: -1 }); // Loop indefinitely

    words.forEach((wordObj, index) => {
      if (index > 0) {
        tl.to(wordsElements[index - 1], {
          opacity: 0,
          duration: 0,
          ease: "elastic.out",
        });
      }
      tl.to(wordsElements[index], {
        delay: 0.5,
        duration: 0.4,
        opacity: 1,
        y: "0%",
        ease: "elastic.out(1,0.5)",
        color: colors[wordObj.color] || "inherit", // Apply color if specified in word object
      });
    });

    return () => {
      tl.kill();
    };
  }, [words]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {words.map((wordObj, index) => (
        <span
          key={index}
          className={classNames}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            color: colors[wordObj.color] || "inherit",
            fontSize: fontSize, // Apply color if specified in word object
          }}
        >
          {wordObj.word.toUpperCase()} {/* Uppercase the word */}
        </span>
      ))}
    </div>
  );
};

export default TextRevealAnimation;
