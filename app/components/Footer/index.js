import React from "react";
import Icon from "../UI/Icon";

const Footer = () => {
  return (
    <footer className="md:h-[115px] h-[200px] bg-black w-full">
      <div className="container relative w-full h-full flex justify-between md:items-center items-end">
        <div className="md:w-[110px] ">
          <Icon
            name="JCL_LOGO_ROUND"
            width={110}
            height={100}
            className="object-contain absolute -top-[80px] left-4 md:left-0"
          />
        </div>

        <p className="text-white absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          © 2022, Jio Creative Labs
        </p>

        <div className=" w-full md:w-auto justify-center flex gap-6 pb-8 md:pb-0">
          <Icon name="FB" width={25} height={25} />
          <Icon name="YT" width={25} height={25} />
          <Icon name="INSTA_WHITE" width={25} height={25} />
          <Icon name="X" width={25} height={25} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
