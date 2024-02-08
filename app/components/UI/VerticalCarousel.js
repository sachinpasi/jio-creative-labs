"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Icon from "./Icon";

export default function App({ items }) {
  const ref = useRef();
  const autoSlideInterval = 3000; // Adjust this value to change auto slide interval
  let autoSlideTimer; // Timer variable for auto slide

  const next = () => {
    var wrapHeight = (ref.current.children.length - 1) * window.innerHeight;
    gsap.to(ref.current.children, {
      y: "-=" + window.innerHeight,
      duration: 1,
      modifiers: {
        y: function (y, target) {
          y = gsap.utils.wrap(-window.innerHeight, wrapHeight, parseInt(y));
          return y + "px";
        },
      },
    });
  };

  const startAutoSlide = () => {
    autoSlideTimer = setInterval(next, autoSlideInterval);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideTimer);
  };

  useEffect(() => {
    gsap.set(ref.current.children, {
      y: (y, target) => target.dataset.index * window.innerHeight,
    });
    startAutoSlide(); // Start auto slide when component mounts

    // Cleanup function to stop auto slide when component unmounts
    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <div
      className="w-screen h-screen flex flex-col overflow-hidden relative bg-black"
      ref={ref}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="w-screen h-screen absolute"
          data-index={index}
        >
          <Icon name={item.name} fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}
