import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ColajCosplay from "../assets/img/ColajCosplay.webp";

function Cosplay() {
  const googleFormLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdLoKugg4QfKFswpmC5U7SqViCXDBDE5tfmpzFNRiJiUcbQsw/viewform?usp=sharing";
  const [isHovered, setIsHovered] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);
  return (
    <>
      <div>
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
          <div className="text-5xl flex justify-center text-stroke-3 font-bold text-white mb-4">
            <text>COS</text>
            <text className="text-[#78e800]">PLAY</text>
          </div>
          <div className="flex-wrap rounded-lg pb-16">
            <div
              className="relative md:w-4/6 w-4/5 rounded-lg mx-auto mt-16"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a
                href={googleFormLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full rounded-lg hover:blur-[2px] transition duration-300"
                  src={ColajCosplay}
                  alt="Imagine cu un colaj cosplay"
                />
                <div className="pointer-events-none absolute top-0 opacity-80 left-0 w-full h-full flex flex-col items-center justify-center">
                  <span className="md:text-3xl text-xs text-white hover:duration-300 hover:bg-opacity-0 bg-black px-2 py-1 rounded">
                    Competiția cosplay la LanParty LSE: tehnologia întâlnește
                    arta și pasiunea.
                  </span>
                </div>
                <div
                  className={`pointer-events-none absolute bottom-2/3 left-1/2 bg-opacity-100 transform -translate-x-1/2 bg-[#78e800] md:px-2 md:py-1 rounded transition-opacity duration-300 ${
                    isHovered ? "opacity-85" : "opacity-0"
                  }`}
                >
                  <span className="text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl text-white whitespace-nowrap">
                    CLICK AICI PENTRU ÎNSCRIERE
                  </span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

//vrem vreme buna muie lu furtuna ca nu ne-a lasat sa punem animatia

export default Cosplay;
