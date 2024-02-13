"use client";
import React from "react";
import Icon from "../UI/Icon";

const HeroSection = () => {
  return (
    <div className="w-full h-[300px]  md:h-[calc(100vh)] flex justify-center relative">
      <Icon
        name={"HERO"}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
        alt="hero"
      />
    </div>
  );
};

export default HeroSection;
