import React from "react";

const TextArea = ({ name, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-[#344054] font-medium text-[18px]" htmlFor="">
        {name}
      </label>
      <textarea
        style={{
          boxShadow: " 0px 1.39951px 2.79903px rgba(16, 24, 40, 0.05)",
        }}
        type={type}
        placeholder={placeholder}
        className="h-[144px] w-full border-[1.4px] border-[#D0D5DD] px-[18px] rounded-[6px] mt-2"
      />
    </div>
  );
};

export default TextArea;
