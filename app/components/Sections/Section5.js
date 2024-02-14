import React, { useEffect, useState } from "react";
import Marquee from "../UI/Marquee";
import Icon from "../UI/Icon";
import { CONSTANTS } from "@/app/constants";

const Section5 = () => {
  return (
    <div className=" px-4 md:px-0">
      <div className="container my-[50px] md:my-[100px]">
        <h1 className=" uppercase md:text-[60px] text-3xl md:leading-[60px]">
          Recommended by <br /> the BEST
        </h1>
      </div>
      <div className="flex mb-[100px] -ml-[500px] justify-center ">
        <Marquee startFrom="left" onlyOneDirection>
          {CONSTANTS.LIST.map((el, I) => (
            <div
              key={I}
              className="w-[300px] h-[117px] flex justify-center items-center object-contain"
            >
              <Icon
                name={el}
                height={100}
                width={150}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>{" "}
      </div>
    </div>
  );
};

export default Section5;
