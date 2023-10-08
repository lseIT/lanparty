import React, { useEffect, useRef } from "react";
import { Background, Parallax } from "react-parallax";
import LseBanner from "../assets/img/LseBanner.webp";
import { motion, useInView, useAnimation } from "framer-motion";
import LogoWhite from "../assets/img/LogoWhite.webp";
import AboutUsCard from "./AboutUsCard";

export default function AboutUs() {
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
      <Parallax strength={400} className="my-10 py-10 ">
        <Background className="relative w-screen h-screen"></Background>
        <motion.div
          ref={ref}
          id="projects"
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="h-full w-full ">
            <h1 className="uppercase md:text-5xl text-3xl text-white font-bold justify-center flex">
              Despre <span className="text-[#78e800] pl-4">Noi</span>
            </h1>
            <div className="flex justify-center mt-6">
              <img src={LogoWhite} alt="Logo" />
            </div>
            <div className="self-center justify-center flex font-bold text-center text-white text-2xl md:text-3xl pt-6">
              <p>Liga Studenților Electroniști</p>
            </div>
            <div>
              <p className="text-white md:text-2xl text-xl font-medium text-center p-4 m-4">
                este organizația studențească din cadrul Facultății de
                Electronică, Telecomunicații și Tehnologia Informației, care în
                decursul a peste 30 de ani de activitate a reușit să reprezinte
                cu succes interesele studenților prin implementarea unor
                proiecte educaționale, de cercetare și dezvoltare presonală,
                precum:
              </p>
            </div>
            <div>
              <div className=" lg:flex justify-center md:gap-10 grid grid-cols-1 place-items-center  ">
                <AboutUsCard name="Electron" logo={LogoWhite} />
                <AboutUsCard name="RoboChallenge" logo={LogoWhite} />
                <AboutUsCard name="Aleargă pentru viață" logo={LogoWhite} />
              </div>
            </div>
          </div>
        </motion.div>
      </Parallax>
    </>
  );
}
