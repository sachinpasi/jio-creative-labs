import React, { useState, useRef, useEffect } from "react";

const ClientDropdown = ({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
  placeholder,
}) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOptionOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isSelected = (option) => selectedOptions.includes(option);

  const handleDropdownClick = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  const handleOptionClick = (option) => {
    toggleOption(option);
  };

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <div className="flex items-center gap-6">
        <label
          className="text-[#344054]  text-[26px] cursor-pointer"
          htmlFor="clientBtn" // Unique id for label
        >
          {label}
        </label>
        <svg
          width="20"
          height="14"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1358 17.7321C13.5533 18.5893 12.0971 18.5893 11.5146 17.7321L1.0302 2.30357C0.447729 1.44643 1.17581 0.374998 2.34075 0.374998L23.3096 0.375C24.4746 0.375 25.2027 1.44643 24.6202 2.30357L14.1358 17.7321Z"
            fill="#424242"
          />
        </svg>
      </div>
      <div className="mt-2 relative">
        <button
          type="button"
          id="clientBtn" // Unique id for button
          className="justify-between w-full rounded-md border hidden border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          onClick={handleDropdownClick}
        >
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : placeholder}
        </button>

        {isOptionOpen && (
          <div className="origin-top-right absolute z-30 right-0 mt-2 w-[250px] -left-2   shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  className={`w-full text-left px-4 py-2 text-[22px] flex items-center justify-between  ${
                    isSelected(option.value)
                      ? "text-gray-900 font-medium bg-gray-100"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  <p>{option.value}</p>
                  {isSelected(option.value) && (
                    <svg
                      width="22"
                      height="16"
                      viewBox="0 0 22 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.9429 0.557374C21.1928 0.807411 21.3333 1.14649 21.3333 1.50004C21.3333 1.85359 21.1928 2.19267 20.9429 2.44271L8.27622 15.1094C8.02618 15.3593 7.6871 15.4998 7.33355 15.4998C6.98 15.4998 6.64092 15.3593 6.39088 15.1094L0.390885 9.10937C0.148007 8.8579 0.0136141 8.5211 0.016652 8.17151C0.0196899 7.82191 0.159915 7.48749 0.407126 7.24028C0.654337 6.99307 0.988753 6.85285 1.33835 6.84981C1.68794 6.84677 2.02475 6.98116 2.27622 7.22404L7.33355 12.2814L19.0575 0.557374C19.3076 0.307413 19.6467 0.166992 20.0002 0.166992C20.3538 0.166992 20.6928 0.307413 20.9429 0.557374Z"
                        fill="black"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientDropdown;
