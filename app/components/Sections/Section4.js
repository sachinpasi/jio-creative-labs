import React from "react";

import VerticalSlider from "../UI/VerticalCarousel";

const Section4 = () => {
  return (
    <div className="min-h-screen pb-[120px] bg-black">
      <VerticalSlider
        width="100vw"
        height="100vh"
        items={[
          {
            name: "SLIDE_1",
          },
          {
            name: "SLIDE_2",
          },
          {
            name: "SLIDE_3",
          },
          {
            name: "SLIDE_4",
          },
          {
            name: "SLIDE_5",
          },
        ]}
      />
    </div>
  );
};

export default Section4;
