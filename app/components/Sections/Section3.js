"use client";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import Icon from "../UI/Icon";

const Section3 = () => {
  const illustrationRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const floatingAnimation = gsap.to(illustrationRef.current, {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      floatingAnimation.kill();
    };
  }, []);

  // useEffect(() => {
  //   const containers = document.querySelectorAll(".text-change-on-scroll");
  //   let tl = null;
  //   containers.forEach((container) => {
  //     tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         pin: true,
  //         pinSpacing: true,
  //         scrub: true,
  //         markers: true,
  //       },
  //     });

  //     tl.to(container, {
  //       autoAlpha: 1, // Fade in
  //       duration: 0.5, // Adjust this duration as needed
  //     }).to(
  //       container,
  //       {
  //         autoAlpha: 0, // Fade out
  //         duration: 0.5, // Adjust this duration as needed
  //       },
  //       "+=1" // Keep visible for 1 second before fading out
  //     );
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return (
    <div
      id="services"
      className="bg-black md:min-h-screen min-h-[80vh] py-[40px] md:py-[80px] px-4 md:px-0"
    >
      <div className="container">
        <h1 className="text-white uppercase text-2xl md:text-[58px] md:leading-[60px]">
          We are the jack-of-all-trades & master of fun!
        </h1>
        <p className="text-white md:text-[23px] md:leading-[30px] mt-4">
          From mind-blowing campaigns to digital wizardry that will leave your
          competitors scratching their <br /> heads. We’ve got you covered,
          literally!
        </p>
        <div className="flex mt-[100px]  items-center md:gap-36">
          <div className="-ml-[40px] hidden md:block" ref={illustrationRef}>
            <Icon name="ILLUSRTATION_2" width={500} height={440} />
          </div>
          <div>
            <h1 className="text-white text-[38px] md:text-[48px] mt-2 md:mt-0">
              Mainline Advertising
            </h1>
            <p className="font-source-sans text-white text-[27px] font-medium">
              TV, Print, Radio, Brand Strategy
            </p>
          </div>
          {/* <div className="w-full h-full">
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full ">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
            <div className="text-change-on-scroll text-[48px] text-white invisible w-full h-full">
              Some Text
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Section3;
