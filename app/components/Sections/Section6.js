"use client";

import React, { useEffect, useRef, useState } from "react";
import InstagramCard from "../UI/InstagramCard";
import { useRouter } from "next/navigation";
import gsap from "gsap";

const Section6 = ({ isDesktop }) => {
  const [isHovered, setIsHovered] = useState({
    careers: false,
    contact: false,
  });

  const btn = useRef(null);
  const router = useRouter();

  const GradientStyle = {
    background:
      "linear-gradient(90deg, #03007F 0%, #FF2E63 53.12%, #00C0CC 100%)",
  };

  useEffect(() => {
    const floatingAnimation = gsap.to(btn.current, {
      y: -30,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      floatingAnimation.kill();
    };
  }, []);

  return (
    <div className="container pt-[100px] pb-[50px]  px-4 md:px-0">
      <div className="mb-[100px]">
        <h1 className=" uppercase md:text-[60px] text-3xl md:leading-[60px]">
          What’s Going on!
        </h1>
        <p className="md:text-h4 text-[22px]  font-black capitalize">
          check out our latest Social posts
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 justify-between ">
        {["INSTA_1", "INSTA_2", "INSTA_3", "INSTA_4", "INSTA_5"].map((el) => (
          <InstagramCard isDesktop={isDesktop} key={el} name={el} />
        ))}
      </div>{" "}
      <div className="mt-5 flex justify-end">
        <h2 className="font-source-sans text-[22px] text-black-2 font-light mr-4 md:mr-0">
          View More
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-[150px] mb-[100px] ">
        <h1 className="md:text-h3 text-h4  font-source-sans font-black text-center ">
          JOIN THE BRANDWAGON
        </h1>
        <div
          style={GradientStyle}
          className=" w-[244px] h-[50px] rounded-full flex items-center justify-center cursor-pointer  mt-8 "
          onMouseEnter={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              careers: true,
            }))
          }
          onMouseLeave={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              careers: false,
            }))
          }
          onClick={() => router.push("/contact-us")}
        >
          <div
            style={{
              background: isHovered.careers ? "transparent " : "white",
              color: isHovered.careers ? "white " : "black",
            }}
            className="flex items-center gap-2 w-[239px] h-[45px] rounded-full justify-center"
          >
            <p className="text-[18px] font-semibold leading-[150%]">
              Let’s do Business
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div
          ref={btn}
          style={GradientStyle}
          className=" w-[150px] h-[50px] rounded-full flex items-center justify-center cursor-pointer  mt-8 "
          onMouseEnter={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              contact: true,
            }))
          }
          onMouseLeave={() =>
            setIsHovered((prevState) => ({
              ...prevState,
              contact: false,
            }))
          }
          onClick={() => router.push("/contact-us")}
        >
          <div
            style={{
              background: isHovered.contact ? "transparent " : "white",
              color: isHovered.contact ? "white " : "black",
            }}
            className="flex items-center gap-2 w-[145px] h-[45px] rounded-full justify-center"
          >
            <p className="text-[18px] font-semibold leading-[150%]">
              Contact Us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
