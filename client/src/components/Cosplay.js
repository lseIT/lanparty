import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ColajCosplay from "../assets/img/ColajCosplay.webp";

function SignupButton() {
  const googleFormLink = "https://docs.google.com/forms/d/e/..."; // Înlocuiți cu linkul dvs.

  return (
    <a
      href={googleFormLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#78e800] text-black flex justify-center items-center w-full text-xl py-6 rounded-lg hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:duration-300 font-bold whitespace-nowrap"
    >
      Înscrie-te
    </a>
  );
}

function Cosplay() {
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
          <div className="flex-wrap rounded-lg">
            <div className="relative w-128 rounded-lg mx-auto mt-16">
              <img
                className="w-full rounded-lg hover:blur-sm transition duration-300"
                src={ColajCosplay}
                alt="Imagine cu un colaj cosplay"
              />
              <div className="pointer-events-none absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                <span
                  style={{
                    textShadow:
                      "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
                  }}
                  className="text-5xl pb-16 text-stroke-3 font-bold text-[#78e800] mb-4"
                >
                  COSPLAY
                </span>
                <span className="md:text-3xl text-xs text-white hover:duration-300 hover:bg-opacity-0 bg-black px-2 py-1 rounded">
                  Competiția cosplay la LanParty LSE: tehnologia întâlnește arta
                  și pasiunea.
                </span>
              </div>
            </div>
            <div className="text-center pt-16 pb-32">{SignupButton()}</div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

//vrem vreme buna muie lu furtuna ca nu ne-a lasat sa punem animatia

export default Cosplay;
