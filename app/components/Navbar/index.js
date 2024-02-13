"use client";

import { CONSTANTS } from "@/app/constants";
import Icon from "../UI/Icon";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <nav className="max-w-[1920px] w-full h-[68px] shadow-drop flex justify-center fixed z-50 bg-white">
      <div className="max-w-[1250px] w-full flex items-center h-full justify-between">
        <Link href="/">
          <Icon
            name={"LOGO_HORIZONTAL"}
            width={228}
            height={36}
            className=" ml-4 md:ml-0"
          />
        </Link>
        <div className="w-[500px] hidden md:flex justify-between">
          {CONSTANTS.NAV_LINKS.map((el) => (
            <Link scroll className="text-label " key={el.name} href={el.ref}>
              {el.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setisNavOpen((el) => !el)}
          className=" md:hidden mr-4"
        >
          {isNavOpen ? (
            <svg width="40" height="40" viewBox="0 0 32 32" id="close">
              <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z"></path>
            </svg>
          ) : (
            <svg x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50">
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          )}
        </div>
      </div>
      <div
        style={{
          height: "calc(100vh - 68px)",
          position: "fixed",
          background: "rgba(0, 0, 0, 0.6)",
          width: "100%",
          top: "68px",
          display: isNavOpen ? "flex" : "none",
        }}
      >
        <div
          style={{
            height: "40vh",
            display: isNavOpen ? "flex" : "none",
          }}
          className="w-full  bg-white top-[68px] p-8"
        >
          <div className=" w-full flex flex-col justify-between">
            {CONSTANTS.NAV_LINKS.map((el) => (
              <Link
                onClick={() => setisNavOpen((el) => !el)}
                scroll
                className="text-label"
                key={el.name}
                href={el.ref}
              >
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
