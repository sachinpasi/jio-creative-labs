import React from "react";
import Icon from "../UI/Icon";

const Footer = () => {
  return (
    <footer className="h-[115px] bg-black w-full">
      <div className="container relative h-full flex justify-between items-center">
        <div className="w-[110px]">
          <Icon
            name="JCL_LOGO_ROUND"
            width={110}
            height={100}
            className="object-contain absolute -top-[80px]"
          />
        </div>

        <p className="text-white absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2">
          © 2022, Jio Creative Labs
        </p>

        <div className="flex gap-6">
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
