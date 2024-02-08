import React from "react";
import Icon from "../UI/Icon";
import Marquee from "../UI/Marquee";

const STROKE = {
  WebkitTextFillColor: "white",
  WebkitTextStrokeWidth: "1.9px",
  WebkitTextStrokeColor: "black",
};

const Section1 = () => {
  return (
    <div className="my-[100px] overflow-hidden h-[584px]  relative  flex justify-center items-center">
      <div className="flex justify-center items-center absolute z-10 left-1/2 -translate-x-1/2 ">
        <Icon
          name={"ILLUSRTATION_1"}
          width={680}
          height={584}
          alt="ILLUSRTATION_1"
        />
      </div>
      <div className="">
        <Marquee startFrom="left">
          {Array.from({ length: 6 }).map((el, idx) => (
            <h1
              key={idx}
              className="text-h1 line-height-[90px] uppercase flex gap-3"
            >
              <span>Creative* </span>
              <span style={STROKE}>Creative* </span>
              <span style={STROKE}>Creative* </span>
            </h1>
          ))}
        </Marquee>{" "}
        <Marquee startFrom="right">
          {Array.from({ length: 6 }).map((el, idx) => (
            <h1
              key={idx}
              className="text-h1 line-height-[90px] uppercase flex gap-3"
            >
              <span>Disruptive*</span>
              <span style={STROKE}>Disruptive*</span>
              <span style={STROKE}>Disruptive*</span>
            </h1>
          ))}
        </Marquee>
        <Marquee startFrom="left">
          {Array.from({ length: 6 }).map((el, idx) => (
            <h1
              key={idx}
              className="text-h1 line-height-[90px] uppercase flex gap-3"
            >
              <span>innovation* </span>
              <span style={STROKE}>innovation*</span>
              <span style={STROKE}>innovation* </span>
            </h1>
          ))}
        </Marquee>{" "}
      </div>
    </div>
  );
};

export default Section1;
