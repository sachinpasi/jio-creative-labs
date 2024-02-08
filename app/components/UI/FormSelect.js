import React, { useState, useRef, useEffect } from "react";

const FormSelect = ({ name, placeholder, options }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOptionOpen(false);
      }
    };

    if (isOptionOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOptionOpen]);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleOptionClick = (option) => {
    toggleOption(option);
  };

  return (
    <div className="relative flex flex-col w-full" ref={dropdownRef}>
      <label className="text-[#344054] font-medium text-[18px]" htmlFor="">
        {name}
      </label>
      <div
        onClick={() => setIsOptionOpen(!isOptionOpen)}
        className="relative h-[54px] w-full border-[1.4px] border-[#D0D5DD] px-[18px] rounded-[6px] mt-2 cursor-pointer flex items-center justify-between"
      >
        <input
          className="w-full text-start text-[#344054] cursor-pointer"
          type="button"
          value={
            selectedOptions.length > 0
              ? selectedOptions.join(", ")
              : placeholder
          }
          readOnly
        />
        <svg
          className={`transition-transform transform ${
            isOptionOpen ? "rotate-180" : ""
          }`}
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61499 1.25134L7.61499 7.25134L13.615 1.25134"
            stroke="#667085"
            strokeWidth="2.33252"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {isOptionOpen && (
        <div className="absolute top-full mt-1 m-w-[336px] bg-white rounded-md drop-shadow-lg p-4">
          {options.map((option) => (
            <div
              key={option}
              className={`mx-4 px-2  py-2 cursor-pointer rounded-sm ${
                selectedOptions.includes(option)
                  ? "bg-gray-200 text-black font-medium"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormSelect;
