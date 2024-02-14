"use client";
import { useEffect, useState } from "react";
import CustomCursor from "./components/Cursor";
import HeroSection from "./components/Hero";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
import Section5 from "./components/Sections/Section5";
import Section6 from "./components/Sections/Section6";

export const isSmallScreen = () => document.body.clientWidth < 767;
const DEBOUNCE_TIME = 100;

let timer = null;

const Home = () => {
  const [isDesktop, setisDesktop] = useState(true);

  const debouncedDimensionCalculator = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  };

  useEffect(() => {
    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer]);

  return (
    <main>
      <CustomCursor isDesktop={isDesktop} />
      <HeroSection />
      <Section1 isDesktop={isDesktop} />
      <Section2 isDesktop={isDesktop} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 isDesktop={isDesktop} />
    </main>
  );
};

export default Home;
