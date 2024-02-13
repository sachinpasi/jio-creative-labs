import React from "react";

import VerticalSlider from "../UI/VerticalCarousel";

const Section4 = () => {
  return (
    <div className="md:min-h-screen pb-[120px] bg-black">
      <VerticalSlider
        width="100vw"
        height="100vh"
        items={[
          {
            name: "/videos/part1(split-video.com).mp4",
          },
          {
            name: "/videos/part2(split-video.com).mp4",
          },
          {
            name: "/videos/part3(split-video.com).mp4",
          },
          {
            name: "/videos/part4(split-video.com).mp4",
          },
          {
            name: "/videos/part5(split-video.com).mp4",
          },
          {
            name: "/videos/part6(split-video.com).mp4",
          },
          {
            name: "/videos/part7(split-video.com).mp4",
          },
          {
            name: "/videos/part8(split-video.com).mp4",
          },
        ]}
      />
    </div>
  );
};

export default Section4;
