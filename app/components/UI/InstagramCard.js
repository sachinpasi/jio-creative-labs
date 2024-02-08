import React from "react";
import Icon from "./Icon";

const InstagramCard = ({ name }) => {
  return (
    <div
      style={{
        border: "0.863078px solid #BDBDBD",
      }}
      className="w-[240px] h-[400px] rounded-[10px] p-4 flex flex-col gap-4"
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="flex justify-between items-center gap-1">
            <p className="font-source-sans">Jio_creative_labs</p>
            <Icon name="VERIFED" width={14} height={14} />
          </div>
          <p className="font-source-sans text-[8px] text-white-3">Oct 2022</p>
        </div>
        <div className="flex justify-between items-center">
          <Icon name="INSTA" width={18} height={18} />
        </div>
      </div>
      <div className="w-[210px] h-[210px] rounded-[8px] ">
        <Icon name={name} width={210} height={210} className="rounded-[8px]" />
      </div>
      <div className="flex gap-4">
        <div className="rounded-full border-[0.9px] w-[28px] h-[28px] flex justify-center items-center overflow-hidden">
          <Icon name="JCL_LOGO_ROUND" width={18} height={18} />
        </div>
        <div className="pt-1">
          <p className="text-[10px] font-medium font-source-sans">
            jio_creative_labs
          </p>
          <p className="text-[10px] pb-2">Lorem ipsum dolor sit amet</p>

          <p className="text-[10px]">
            <span className="text-[#00376B]">@loremipsum</span> <br />
            shot by 📷 : <span className="text-[#00376B]">@lorem</span>
          </p>
          <p className="text-[10px]">
            Edited by: <span className="text-[#00376B]">@loremipsum</span>
          </p>
          <p className="text-[8px] text-[#737373]">Edited · 1w</p>
        </div>
      </div>
    </div>
  );
};

export default InstagramCard;
