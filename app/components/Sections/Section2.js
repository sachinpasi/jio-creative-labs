"use client";
import React, { useState } from "react";
import Icon from "../UI/Icon";
import TextRevealAnimation from "../UI/TextRevealAnimation";

const Section2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
    <div className="min-h-screen relative">
      <Icon
        name="VECTOR"
        width={1512}
        height={982}
        className="-z-10 absolute"
      />
      <div className="container py-[80px]">
        <div className="flex items-center gap-8">
          <h1 className="uppercase text-8xl pt-2">we are</h1>
          <Icon
            name="LEFT_DOWN_ARROW"
            width={96}
            height={96}
            className="pb-16"
          />
        </div>
        <div className="mt-24">
          <TextRevealAnimation
            fontSize="105px"
            classNames="uppercase text-8xl text-h1 font-archivo leading-[137px]"
            words={[
              { word: "JIO CREATIVE LABS", color: "primary" },
              { word: "THINKERS", color: "secondary" },
              { word: "MARKETERS", color: "secondary-2" },
              { word: "DIRECTORS", color: "primary" },
              { word: "STORYTELLERS", color: "secondary" },
              { word: "STRATEGISTS", color: "secondary-2" },
              { word: "WRITERS", color: "primary" },
              { word: "DESIGNERS", color: "secondary" },
              { word: "PRODUCERS", color: "secondary-2" },
              { word: "POST - PRODUCERS", color: "primary" },
              { word: "COMPOSERS", color: "secondary" },
              { word: "EDITORS", color: "secondary-2" },
              { word: "PLANNERS", color: "primary" },
              { word: "SPECIALISTS", color: "secondary" },
              { word: "COLOURISTS", color: "secondary-2" },
              { word: "INFLUENCERS", color: "primary" },
              { word: "MANAGERS", color: "secondary" },
              { word: "TECHIES", color: "secondary-2" },
              { word: "+ INTERNS", color: "primary" },
            ]}
          />
        </div>
        <div className="flex gap-[80px] ">
          <div>
            <div className="pt-3 flex flex-col gap-4 pb-5">
              <p className="font-medium text-label text-[#4A4A4A] max-w-[800px] leading-[150%]">
                Step into the realm of JCL aka Jio Creative Labs, where
                imagination runs wild and creativity takes the center stage.
                We're not your average agency; we're the misfits who bring the
                funk to your brand.
              </p>
              {isExpanded && (
                <>
                  <p className="font-medium text-label text-[#4A4A4A] max-w-[800px] leading-[150%]">
                    We're the rule-breakers, the rebels with a purpose, the
                    architects of engagement, the superheroes of storytelling,
                    the ninjas of social media, the wizards of innovation, and
                    the maestros of turning "meh" into "heck yeah!" We believe
                    that marketing should be anything but boring. With the
                    mighty force of India's largest private sector company
                    fueling our passion, we're here to set your brand on fire
                    with our unmatched, new-age expertise.{" "}
                  </p>
                  <p className="font-medium text-label text-[#4A4A4A] max-w-[800px] leading-[150%]">
                    We're not just another agency-cum-production-house. In a
                    nutshell, we're a full-service powerhouse that lives and
                    breathes marketing. From mainline advertising to digital
                    wizardry, from social media mastery to mind-blowing branded
                    content, we've got you covered. We're even dabbling in IPs,
                    OTT shows, events, influencer outreach, and mind-boggling
                    technology-driven content. Trust us, we're everywhere! Think
                    of us as your 360, one-stop-shop for all things awesome.
                  </p>
                </>
              )}
            </div>

            <div
              style={GradientStyle}
              className=" w-[137px] h-[32px] rounded-full flex items-center justify-center cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button onClick={() => setIsExpanded(!isExpanded)}>
                <div
                  style={{
                    background: isHovered ? "transparent " : "white",
                    color: isHovered ? "white " : "black",
                  }}
                  className="flex items-center gap-2 w-[134px] h-[29px] rounded-full justify-center "
                >
                  <p className="text-body font-medium leading-[150%]">
                    Read {isExpanded ? "Less" : "more"}
                  </p>
                  {isHovered ? (
                    <Icon
                      name={"SMALL_LEFT_DOWN_ARROW_WHITE"}
                      width={13}
                      height={13}
                      className={isExpanded ? "rotate-180" : ""}
                    />
                  ) : (
                    <Icon
                      className={isExpanded ? "rotate-180" : ""}
                      name={"SMALL_LEFT_DOWN_ARROW"}
                      width={13}
                      height={13}
                    />
                  )}{" "}
                </div>
              </button>
            </div>
          </div>
          <div>
            <div className="animate-spin-slow mt-4">
              <Icon
                className="animate-scale "
                name="LOGO_ROUND"
                width="100"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
