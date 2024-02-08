"use client";

import React, { useState } from "react";
import InstagramCard from "../UI/InstagramCard";
import { useRouter } from "next/navigation";

const Section6 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const GradientStyle = {
    background:
      "linear-gradient(90deg, #03007F 0%, #FF2E63 53.12%, #00C0CC 100%)",
  };
  return (
    <div className="container pt-[100px] pb-[50px]">
      <div className="mb-[100px]">
        <h1 className=" uppercase text-[60px] leading-[60px]">
          What’s Going on!
        </h1>
        <p className="text-h4 font-black capitalize">
          check out our latest Social posts
        </p>
      </div>
      <div className="flex justify-between ">
        {["INSTA_1", "INSTA_2", "INSTA_3", "INSTA_4", "INSTA_5"].map((el) => (
          <InstagramCard key={el} name={el} />
        ))}
      </div>
      <div className="mt-5 flex justify-end">
        <h2 className="font-source-sans text-[22px] text-black-2 font-light">
          View More
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center mt-[150px] mb-[100px] ">
        <h1 className="text-h3 font-source-sans font-black ">
          JOIN THE BRANDWAGON
        </h1>
        <div
          style={GradientStyle}
          className=" w-[244px] h-[50px] rounded-full flex items-center justify-center cursor-pointer  mt-8 "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => router.push("/contact-us")}
        >
          <div
            style={{
              background: isHovered ? "transparent " : "white",
              color: isHovered ? "white " : "black",
            }}
            className="flex items-center gap-2 w-[239px] h-[45px] rounded-full justify-center"
          >
            <p className="text-[18px] font-semibold leading-[150%]">
              Let’s do Business
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
