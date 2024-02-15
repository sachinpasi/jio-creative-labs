"use client";

import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Icon from "../UI/Icon";

const Section3 = () => {
  const illustrationRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const container = useRef(null);

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

  useEffect(() => {
    const array = [
      {
        heading: "Mainline Advertising",
        subHeading: "TV, Print, Radio, Brand Strategy",
      },
      {
        heading: "Full Service Digital Agency",
        subHeading: `Social Media, Performance Management, ORM, Digital PR`,
      },
      {
        heading: "Production + Post Production",
        subHeading:
          "In-house production capabilities and end-to-end post-production setup",
      },
      {
        heading: "Ancillary Services",
        subHeading:
          "Events, IPs, Branded Content, Web Shows, Tech-Driven Content, Personality Branding, Website Development & Maintenance, SEO/SEM",
      },
    ];
    const scrollDistance = 70 * array.length;

    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${scrollDistance}%`,
        scrub: true,
        pin: true,
      },
    });

    array.forEach((item, index) => {
      const itemTimeline = gsap.timeline();

      itemTimeline.to(headingRef.current, {
        duration: 1,
        ease: "none",
        innerText: item.heading,
      });

      itemTimeline.to(
        subHeadingRef.current,
        {
          duration: 1,
          ease: "none",
          innerText: item.subHeading,
        },
        "-=1"
      );

      mainTimeline.add(itemTimeline, `+=${index}`);
    });

    ScrollTrigger.create({
      trigger: container.current,
      start: "bottom bottom",
      end: `+=${scrollDistance}%`,
      pin: false,
    });

    return () => mainTimeline.kill();
  }, []);

  return (
    <div
      id="services"
      ref={container}
      className="bg-black md:min-h-screen min-h-[100vh] pt-20 py-[40px] md:py-[80px] px-4 md:px-0"
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
        <div className="flex mt-[60px] flex-col md:flex-row  items-center gap-12 md:gap-12">
          <div
            className="-ml-[40px] hidden md:block  md:min-w-[500px]"
            ref={illustrationRef}
          >
            <Icon name="ILLUSRTATION_2" width={450} height={380} />
          </div>
          <div className="block md:hidden " ref={illustrationRef}>
            <Icon name="ILLUSRTATION_2" width={200} height={200} />
          </div>
          <div>
            <h1
              ref={headingRef}
              className="text-white text-[34px] md:text-[48px] mt-2 md:mt-0"
            >
              Mainline Advertising
            </h1>
            <p
              ref={subHeadingRef}
              className="font-source-sans text-white md:text-[27px] font-medium"
            >
              TV, Print, Radio, Brand Strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
