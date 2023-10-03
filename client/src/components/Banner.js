import React, { useRef, useState, useEffect } from "react";
import { Parallax, Background } from "react-parallax";

//Assets
import LseBanner from "../assets/img/LseBanner.webp";

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

  const text = [
    "Mai puternici împreună!",
    "Amintiri de neuitat!",
    "Proiecte de succes!",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Parallax
        className="md:rounded-lg md:mb-40 w-full mt-2 md:mx-auto md:mt-7 h-full rounded-xl "
        strength={400}
      >
        <Background className="relative w-screen h-full filter ">
          <img
            src={LseBanner}
            alt="LSE Banner"
            className="object-cover h-screen w-screen block"
          />
        </Background>
        <div className="mx-auto px-4 py-32 lg:flex lg:h-xl lg:items-center">
          <div className="mx-auto max-w-xl text-center mt-40">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="text-3xl font-extrabold sm:text-5xl lg:p-4 text-white">
                Lan<span className=" text-color-accent">Party</span>
              </h2>
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="mt-4 sm:text-md/relaxed text-white"
                key={text[currentIndex]}
              >
                ”{text[currentIndex]}”
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Parallax>
    </>
  );
};
export default Banner;
