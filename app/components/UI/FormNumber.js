import React from "react";

const FormNumber = ({ name, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-[#344054] font-medium text-[18px]" htmlFor="">
        {name}
      </label>
      <div className="h-[54px] w-full border-[1.4px] border-[#D0D5DD]  flex items-center  rounded-[6px] mt-2">
        <p className="flex items-center gap-1 font-source-sans pl-4">
          <span className="text-[#1D1D1F] ">IN </span>
          <svg
            width="16"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.88965 1.26599L7.88965 7.26599L13.8896 1.26599"
              stroke="#667085"
              stroke-width="2.33252"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
        <input
          style={{
            boxShadow: " 0px 1.39951px 2.79903px rgba(16, 24, 40, 0.05)",
          }}
          type={"number"}
          placeholder={placeholder}
          className="h-[52px] w-full border-none outline-none  px-[18px] rounded-[6px]"
        />
      </div>
    </div>
  );
};

export default FormNumber;
