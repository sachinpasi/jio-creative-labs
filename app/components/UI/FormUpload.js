import React from "react";

const FormUpload = ({ name, placeholder, type }) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-[#344054] font-medium text-[18px]" htmlFor="">
        {name}
      </label>
      <label
        for="file-upload"
        className="h-[180px] w-full border-[1.4px] border-[#D0D5DD] px-[18px] rounded-[6px] mt-2 flex flex-col gap-3 items-center justify-center cursor-pointer border-dashed"
      >
        <svg
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5002 10.0695V19.0695M11.5002 10.0695L9.00021 12.0695M11.5002 10.0695L14.0002 12.0695M4.53421 7.18646C3.58842 7.42445 2.76208 7.99962 2.21046 8.8039C1.65883 9.60818 1.41989 10.5862 1.53851 11.5542C1.65714 12.5223 2.12517 13.4137 2.85467 14.061C3.58417 14.7083 4.52494 15.0669 5.50021 15.0695H6.50021"
            stroke="#191D23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.3302 5.20745C14.9884 3.85402 14.1447 2.68119 12.9703 1.92671C11.7958 1.17222 10.3784 0.892541 9.00542 1.14435C7.6324 1.39617 6.4065 2.16064 5.57622 3.28279C4.74595 4.40494 4.37342 5.80082 4.53416 7.18745C4.53416 7.18745 4.68716 8.06945 5.00016 8.56945"
            stroke="#191D23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 15.0695C17.206 15.069 17.904 14.919 18.5479 14.6293C19.1917 14.3397 19.767 13.9169 20.2357 13.3889C20.7045 12.8609 21.0561 12.2397 21.2674 11.566C21.4787 10.8923 21.545 10.1815 21.4618 9.4804C21.3786 8.77928 21.1479 8.10372 20.7848 7.4982C20.4217 6.89267 19.9345 6.37091 19.3552 5.96724C18.776 5.56358 18.1178 5.28717 17.424 5.15622C16.7302 5.02526 16.0166 5.04272 15.33 5.20746L14 5.56946"
            stroke="#191D23"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="text-[#191D23] text-[14px]">
          Browse and chose the files you want to upload from your computer
        </span>

        <div className="bg-secondary w-[40px] h-[28px] flex justify-center items-center rounded-md">
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.3335 1.23612C8.3335 0.775882 7.9604 0.402786 7.50016 0.402786C7.03993 0.402786 6.66683 0.775883 6.66683 1.23612V6.23612H1.66683C1.20659 6.23612 0.833496 6.60922 0.833496 7.06945C0.833496 7.52969 1.20659 7.90279 1.66683 7.90279H6.66683V12.9028C6.66683 13.363 7.03992 13.7361 7.50016 13.7361C7.9604 13.7361 8.3335 13.363 8.3335 12.9028V7.90279H13.3335C13.7937 7.90279 14.1668 7.52969 14.1668 7.06945C14.1668 6.60922 13.7937 6.23612 13.3335 6.23612H8.3335V1.23612Z"
              fill="white"
            />
          </svg>
        </div>

        <input id="file-upload" type="file" class="hidden" />
      </label>
    </div>
  );
};

export default FormUpload;
