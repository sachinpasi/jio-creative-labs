import React from "react";

import VerticalSlider from "../UI/VerticalCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";

const Section4 = () => {
  return (
    <div className="md:min-h-screen pb-[120px] bg-black md:max-h-screen">
      <>
        <Swiper
          autoplay={{
            delay: 10000,
          }}
          direction="vertical"
          modules={[Autoplay]}
          loop
        >
          {[
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
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div key={index} className="w-screen md:h-screen absolute">
                <video loop autoPlay preload="auto" muted playsInline>
                  <source src={item.name} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Section4;
