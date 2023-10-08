import React, { useRef, useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";

//Assets
import DesktopBanner from "../assets/img/webp/Cover/Cover site - web.png";
import MobileBanner from "../assets/img/webp/Cover/Cover site - mobil.png";

//Packages
import { motion, useInView, useAnimation } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <div className=" hidden lg:block z-10">
        <Parallax
          className="md:rounded-lg md:mb-40 w-full mt-2 md:mx-auto md:mt-7  rounded-xl h-1/2"
          strength={400}
        >
          <Background className="relative w-screen h-full filter ">
            <img
              src={DesktopBanner}
              alt="LanParty Banner"
              className=" object-cover h-screen w-screen pr-16 flex justify-center items-center "
            />
          </Background>
          <div className="mx-auto px-4 py-32 lg:flex lg:h-xl lg:items-center">
            <div className="mx-auto max-w-xl text-center mt-[25vh]"></div>
          </div>
        </Parallax>
      </div>
      <div className="block lg:hidden">
        <Parallax
          className="md:rounded-lg w-full mt-2 md:mx-auto md:mt-7  rounded-xl h-1/2"
          strength={400}
        >
          <Background className="relative w-screen h-full filter ">
            <img
              src={MobileBanner}
              alt="LanParty Banner"
              className="block object-cover h-full w-full px-10"
            />
          </Background>
          <div className="mx-auto px-4 py-10 lg:flex lg:h-xl lg:items-center">
            <div className="mx-auto max-w-xl text-center mt-[25vh]"></div>
          </div>
        </Parallax>
      </div>
    </>
  );
};
export default Banner;
