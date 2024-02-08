import React from "react";
import Icon from "../UI/Icon";

const Section3 = () => {
  return (
    <div id="services" className="bg-black min-h-screen py-[100px]">
      <div className="container">
        <h1 className="text-white uppercase text-[58px] leading-[60px]">
          We are the jack-of-all-trades & master of fun!
        </h1>
        <p className="text-white text-[23px] leading-[30px] mt-4">
          From mind-blowing campaigns to digital wizardry that will leave your
          competitors scratching their <br /> heads. We’ve got you covered,
          literally!
        </p>
        <div className="flex mt-[100px] items-center gap-36">
          <div className="-ml-[40px]">
            <Icon name="ILLUSRTATION_2" width={500} height={440} />
          </div>
          <div>
            <h1 className="text-white text-[48px]">Mainline Advertising</h1>
            <p className="font-source-sans text-white text-[27px] font-medium">
              TV, Print, Radio, Brand Strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
