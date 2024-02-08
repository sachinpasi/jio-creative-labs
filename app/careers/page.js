"use client";

import React, { useState } from "react";
import FormInput from "../components/UI/FormInput";
import FormNumber from "../components/UI/FormNumber";
import TextArea from "../components/UI/TextArea";
import FormUpload from "../components/UI/FormUpload";
import Icon from "../components/UI/Icon";

const CareersPage = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    <div className=" px-12 container py-[150px]">
      <div className="w-full">
        <h1 className="uppercase text-h4">Careers</h1>
        <div className="h-[1.5px] w-full bg-[#1D1D1F]"></div>
      </div>
      <div className="w-full my-[60px] flex justify-between">
        <div>
          <h1 className="font-source-sans font-bold text-[32px]">
            Well. If you are M[Ad] like us, hop on board.
          </h1>
          <p className="text-[18px] font-medium text-black-2 mt-1">
            Get in Touch, Send us Your Profile for Opportunities Ahead
          </p>
          <form className="my-[40px] flex flex-col gap-6" action="">
            <div className="flex w-[600px] gap-6">
              <FormInput name="First name" placeholder="First name" />
              <FormInput name="Last name" placeholder="Last name" />
            </div>
            <FormInput name="Email" placeholder="Your Mail" />
            <FormNumber name="Phone number" placeholder="+91" />
            <FormInput name="Portfolio link" placeholder="your work link" />
            <TextArea name="Message" />
            <FormUpload name="Upload Resume" />

            <div className="flex justify-center items-center ">
              <button
                style={GradientStyle}
                className=" w-[244px] h-[50px] rounded-full flex items-center justify-center cursor-pointer  mt-8 "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  style={{
                    background: isHovered ? "transparent " : "white",
                    color: isHovered ? "white " : "black",
                  }}
                  className="flex items-center gap-2 w-[239px] h-[45px] rounded-full justify-center"
                >
                  <p className="text-[18px] font-semibold leading-[150%]">
                    Send Message
                  </p>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div>
          <Icon name="PITCH" width={400} height={872} />
        </div>
      </div>
      <div className="mt-[100px] mb-[50px] flex items-center justify-between">
        <div>
          <Icon name="ILLUSRTATION_3" width={480} height={480} />
        </div>
        <div>
          <div className="max-w-[580px] relative">
            <Icon
              name="QOUTES_UP"
              width={28}
              height={28}
              className="absolute -left-8 -top-4"
            />
            <p className="font-source-sans text-[20px] leading-[26px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              maximus eros sit amet arcu blandit, ut facilisis nisi vehicula.
            </p>
            <br />
            <p className="font-source-sans text-[20px] leading-[26px]">
              Praesent ac laoreet nulla. Maecenas semper facilisis pulvinar.
              Maecenas efficitur, libero at convallis condimentum,
            </p>
            <br />

            <p className="font-source-sans text-[20px] leading-[26px]">
              Dui neque commodo nunc, non efficitur lectus magna sed leo.
            </p>
            <Icon
              name="QOUTES_DOWN"
              width={28}
              height={28}
              className="absolute right-8 -bottom-3"
            />
          </div>
          <div className="mt-10 flex gap-4 items-center">
            <div className="border p-1 rounded-full w-[90px]">
              <Icon name="AVATAR" width={90} height={90} />
            </div>
            <div>
              <p className="text-[24px] leading-[26px] font-source-sans font-medium">
                Lorem ipsum
              </p>
              <p className="text-[18px] font-source-sans ">Lorem ipsum</p>
              <p className="text-[13px] font-source-sans">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
