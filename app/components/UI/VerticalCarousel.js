import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function App({ items }) {
  const ref = useRef();
  const autoSlideInterval = 10000;
  let autoSlideTimer;

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
    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <div
      className="w-screen md:h-screen h-[200px] flex flex-col overflow-hidden relative bg-black"
      ref={ref}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="w-screen h-screen absolute"
          data-index={index}
        >
          <video autoPlay preload="auto" muted>
            <source src={item.name} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}
