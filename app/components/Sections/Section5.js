import React from "react";
import Marquee from "../UI/Marquee";
import Icon from "../UI/Icon";

const Section5 = () => {
  return (
    <div>
      <div className="container my-[100px]">
        <h1 className=" uppercase text-[60px] leading-[60px]">
          Recommended by <br /> the BEST
        </h1>
      </div>
      <div className="flex mb-[100px] -ml-[500px] justify-center ">
        <Marquee startFrom="left">
          {[
            "BALAJI",
            "COLORS",
            "DETTOL",
            "HDFC",
            "ROSO",
            "SWIGGY",
            "COLORS",
            "DETTOL",
            "HDFC",
            "ROSO",
            "SWIGGY",
            "BALAJI",
            "COLORS",
            "DETTOL",
            "HDFC",
            "ROSO",
            "SWIGGY",
          ].map((el) => (
            <div
              key={el}
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
