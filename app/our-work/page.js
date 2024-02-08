"use client";

import React, { useState } from "react";
import Icon from "../components/UI/Icon";
import MultiSelectDropdown from "../components/UI/MultiSelectDropdown";

const OurWorkPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAllProjectTicked, setIsAllProjectTicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="px-12 container py-[150px]">
      <div className="w-full">
        <h1 className="uppercase text-h4">Our Workfolio</h1>
        <div className="h-[1.5px] w-full bg-[#1D1D1F]"></div>
      </div>
      <div className="w-full ">
        <div className="my-8 mx-16 flex justify-between items-center ">
          <MultiSelectDropdown label="Type Of Client" options={["12"]} />
          <MultiSelectDropdown label="Type Of Work" options={["11"]} />

          <button onClick={() => setIsAllProjectTicked((el) => !el)}>
            <p className="font-source-sans text-[26px] text-black-2 text-nowrap whitespace-nowrap ">
              All Projects
            </p>
          </button>
        </div>
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={handleCardClick}
              className="relative w-[374px] h-[374px] bg-[#5092DE] flex justify-center items-center cursor-pointer overflow-x-hidden"
              style={{ zIndex: 12 - index }}
            >
              <div
                className={`absolute inset-0  transition-transform duration-[800ms] transform flex justify-center items-center ${
                  hoveredIndex === index ? "-translate-x-full" : "translate-x-0"
                } cover`}
              >
                <Icon name="WORK_1" height={290} width={290} />{" "}
              </div>

              <div
                className={`absolute inset-0  bg-white transition-transform duration-[800ms] transform ${
                  hoveredIndex === index ? "translate-x-0" : "translate-x-full"
                } cover`}
              ></div>
              <div
                style={{
                  background: "rgba(151, 71, 255, 0.51)",
                }}
                className={`absolute inset-0 bg-opacity-50 transition-transform duration-[800ms] flex flex-col p-4 gap-4 justify-center items-center transform ${
                  hoveredIndex === index ? "translate-x-0" : "translate-x-full"
                } cover`}
              >
                <Icon
                  name="JCL_LOGO_ROUND"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <div className="flex flex-col items-start gap-1">
                  <h3>Lorem ipsum dolor</h3>
                  <p className="font-source-sans text-[12px] font-medium">
                    Lorem ipsum Lorem ipsum Lorem ipsum{" "}
                  </p>
                  <p className="font-source-sans text-[18px] leading-[20px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex justify-center items-center z-50 w-full"
        >
          <div className="bg-[#CFE5FF] p-8  w-[900px] h-[450px] flex justify-between relative">
            <Icon
              name="WORK_1"
              height={350}
              width={350}
              className="object-contain"
            />{" "}
            <div className="flex flex-col justify-center">
              <h1 className="font-source-sans text-[36px] font-black mb-4">
                Lorem ipsum dolor sit amet
              </h1>
              <p className="text-[15px] font-medium mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p className="text-[15px] font-medium mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
              <p className="text-[15px] font-medium mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,
              </p>
            </div>
            <button
              onClick={closeModal}
              className=" absolute right-4 top-4 mt-4 text-white px-4 py-2 "
            >
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.2372 3.1393C20.3584 3.0183 20.4545 2.87462 20.5201 2.71647C20.5857 2.55832 20.6196 2.38879 20.6197 2.21757C20.6198 2.04634 20.5862 1.87678 20.5207 1.71854C20.4553 1.56031 20.3594 1.41652 20.2384 1.29537C20.1174 1.17422 19.9737 1.07809 19.8155 1.01247C19.6574 0.946846 19.4879 0.913016 19.3166 0.912911C19.1454 0.912806 18.9758 0.946427 18.8176 1.01185C18.6594 1.07728 18.5156 1.17323 18.3944 1.29423L10.5314 9.1573L2.67055 1.29423C2.42588 1.04956 2.09404 0.912109 1.74802 0.912109C1.402 0.912109 1.07016 1.04956 0.825485 1.29423C0.580814 1.53891 0.443359 1.87075 0.443359 2.21677C0.443359 2.56279 0.580814 2.89463 0.825485 3.1393L8.68855 11.0001L0.825485 18.8609C0.704336 18.982 0.608236 19.1259 0.54267 19.2842C0.477105 19.4424 0.443359 19.6121 0.443359 19.7834C0.443359 19.9548 0.477105 20.1244 0.54267 20.2827C0.608236 20.441 0.704336 20.5848 0.825485 20.706C1.07016 20.9506 1.402 21.0881 1.74802 21.0881C1.91935 21.0881 2.089 21.0543 2.24729 20.9888C2.40558 20.9232 2.5494 20.8271 2.67055 20.706L10.5314 12.8429L18.3944 20.706C18.6391 20.9503 18.9708 21.0875 19.3166 21.0873C19.6624 21.0871 19.994 20.9495 20.2384 20.7048C20.4827 20.4602 20.6199 20.1284 20.6197 19.7826C20.6195 19.4368 20.4819 19.1053 20.2372 18.8609L12.3742 11.0001L20.2372 3.1393Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorkPage;
