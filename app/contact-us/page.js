"use client";
import React, { useEffect, useRef, useState } from "react";
import FormInput from "../components/UI/FormInput";
import FormNumber from "../components/UI/FormNumber";
import TextArea from "../components/UI/TextArea";
import FormUpload from "../components/UI/FormUpload";
import Icon from "../components/UI/Icon";
import FormSelect from "../components/UI/FormSelect";
import gsap from "gsap";

const ContactUsPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const icon = useRef(null);

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
  useEffect(() => {
    const floatingAnimation = gsap.to(icon.current, {
      y: -30,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      floatingAnimation.kill();
    };
  }, []);

  return (
    <div className=" md:px-12 px-5 container md:py-[150px] py-[90px]">
      <div className="w-full">
        <h1 className="uppercase text-h4">Contact Us</h1>
        <div className="h-[1.5px] w-full bg-[#1D1D1F]"></div>
      </div>
      <div className="w-full my-[60px] flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="font-source-sans font-bold md:text-[32px] text-3xl text-wrap">
            Let the ad-venture begin! Drop by to say hello to Gin & Tonic!
          </h1>
          <p className="md:text-[18px] text-base font-medium text-black-2 mt-1">
            Send us a message and we will get back to you as soon as we can :)
          </p>
          <form
            className="my-[40px]  md:max-w-[600px] flex flex-col gap-6"
            action=""
          >
            <div className="flex flex-col md:flex-row  md:w-[600px] gap-6">
              <FormInput name="First name" placeholder="First name" />
              <FormInput name="Last name" placeholder="Last name" />
            </div>
            <FormInput name="Email" placeholder="Your Mail" />
            <FormNumber name="Phone number" placeholder="+91" />
            <FormSelect
              name="Subject"
              placeholder="Choose Subject"
              options={[
                "Branding",
                "Social Media Management",
                "Content Creation & Marketing",
                "End to End Film/Video Production",
                "Production and Post-production",
                "Website Development & UI/UX",
                "Digital PR & ORM",
                "Personality Branding",
                "Performance Management",
                "SEO/SEM",
                "End to End Ancillary Services",
                "Others",
              ]}
            />
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
        <div ref={icon}>
          <Icon
            className="md:block hidden"
            name="CONTACT_1"
            width={360}
            height={641}
          />
        </div>
      </div>

      <div className="w-full h-[2px] bg-black"></div>
      <div className="mt-[100px] mb-[50px] flex items-center justify-between">
        <div className="">
          <Icon
            className="md:block hidden"
            name="CONTACT_2"
            width={600}
            height={500}
          />
        </div>
        <div className="flex flex-col gap-6 ">
          <div className="flex items-center ">
            <div className="w-[55px] mr-3 -ml-[5px]">
              <svg
                width="37"
                height="37"
                viewBox="0 0 27 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3333 17.5834C12.1178 17.5834 10.952 17.1005 10.0924 16.241C9.23289 15.3815 8.75 14.2157 8.75 13.0001C8.75 11.7845 9.23289 10.6187 10.0924 9.75919C10.952 8.89965 12.1178 8.41676 13.3333 8.41676C14.5489 8.41676 15.7147 8.89965 16.5742 9.75919C17.4338 10.6187 17.9167 11.7845 17.9167 13.0001C17.9167 13.602 17.7981 14.198 17.5678 14.7541C17.3374 15.3101 16.9998 15.8154 16.5742 16.241C16.1486 16.6666 15.6434 17.0042 15.0873 17.2345C14.5312 17.4649 13.9352 17.5834 13.3333 17.5834ZM13.3333 0.166763C9.92972 0.166763 6.66551 1.51884 4.2588 3.92556C1.85208 6.33228 0.5 9.59649 0.5 13.0001C0.5 22.6251 13.3333 36.8334 13.3333 36.8334C13.3333 36.8334 26.1667 22.6251 26.1667 13.0001C26.1667 9.59649 24.8146 6.33228 22.4079 3.92556C20.0012 1.51884 16.7369 0.166763 13.3333 0.166763Z"
                  fill="#424242"
                />
              </svg>
            </div>

            <p className="text-[#344054] md:text-[18px]">
              2nd Floor, 4th North Avenue, Maker Maxity, Bandra Kurla Complex,
              Mumbai, Maharashtra 400051
            </p>
          </div>{" "}
          <div className="flex items-center ">
            <div className="w-[55px]">
              <svg
                width="37"
                height="37"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.8996 35.2568C27.5051 35.2568 25.5461 34.7524 22.6126 33.1135C19.0455 31.1131 16.2863 29.2663 12.7385 25.7277C9.31777 22.3092 7.65314 20.0958 5.32338 15.8564C2.69141 11.0697 3.14008 8.56062 3.64161 7.48826C4.23887 6.20657 5.12048 5.43999 6.26 4.67912C6.90724 4.25506 7.59218 3.89154 8.30613 3.59318C8.37758 3.56246 8.44402 3.53317 8.50332 3.50673C8.85696 3.34742 9.39279 3.10665 10.0715 3.36385C10.5244 3.53388 10.9288 3.88181 11.5618 4.50694C12.8599 5.7872 14.6339 8.6385 15.2883 10.0388C15.7277 10.9825 16.0184 11.6055 16.0191 12.3042C16.0191 13.1223 15.6076 13.7531 15.1082 14.434C15.0146 14.5619 14.9218 14.684 14.8318 14.8026C14.2881 15.517 14.1688 15.7235 14.2473 16.0922C14.4067 16.833 15.5948 19.0385 17.5473 20.9867C19.4999 22.935 21.6417 24.0481 22.3854 24.2067C22.7698 24.2888 22.9806 24.1645 23.7179 23.6016C23.8236 23.5208 23.9322 23.4372 24.0458 23.3537C24.8074 22.7871 25.4089 22.3863 26.2077 22.3863H26.2119C26.9071 22.3863 27.5022 22.6878 28.4881 23.185C29.7741 23.8337 32.7111 25.5848 33.9992 26.8844C34.6258 27.5159 34.9752 27.9189 35.1459 28.3711C35.4031 29.052 35.1609 29.5856 35.003 29.9429C34.9766 30.0022 34.9473 30.0672 34.9166 30.1393C34.6159 30.852 34.2502 31.5355 33.8242 32.1812C33.0648 33.3171 32.2953 34.1966 31.0108 34.7946C30.3512 35.1066 29.6293 35.2646 28.8996 35.2568Z"
                  fill="#424242"
                />
              </svg>
            </div>

            <p className="text-[#344054] md:text-[18px]">02235554000</p>
          </div>{" "}
          <div className="flex items-center ">
            <div className="w-[55px]">
              <svg
                width="37"
                height="37"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.1667 15.1668L22.5001 24.3335L7.83341 15.1668V11.5001L22.5001 20.6668L37.1667 11.5001M37.1667 7.83347H7.83341C5.79841 7.83347 4.16675 9.46513 4.16675 11.5001V33.5001C4.16675 34.4726 4.55306 35.4052 5.24069 36.0929C5.92832 36.7805 6.86095 37.1668 7.83341 37.1668H37.1667C38.1392 37.1668 39.0718 36.7805 39.7595 36.0929C40.4471 35.4052 40.8334 34.4726 40.8334 33.5001V11.5001C40.8334 10.5277 40.4471 9.59504 39.7595 8.90741C39.0718 8.21977 38.1392 7.83347 37.1667 7.83347Z"
                  fill="#424242"
                />
              </svg>
            </div>

            <p className="text-[#344054] md:text-[18px]">
              akshat.bhagat@jiocreativelabs.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
