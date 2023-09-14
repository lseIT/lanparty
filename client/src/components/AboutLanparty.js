import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function AboutLanparty() {
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
          <div className="flex justify-center">
            <h1 className="uppercase text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
              Despre <span className=" text-color-accent">Lanparty</span>
            </h1>
          </div>
          <div className="text-white text-xl md:text-3xl">
            <p className=" text-center p-4 mx-4 font-semibold">
              LANParty este mai mult decât un simplu eveniment. Este o
              comunitate în care jucătorii se conectează, își împărtășesc
              experiențele și construiesc prietenii pe viață. În spatele
              fiecărui gamer există o poveste, iar noi le dăm spațiul să
              strălucească.
            </p>

            <p className=" text-center p-4 mx-4 font-semibold">
              Transformăm adrenalina în competiție, iar competiția în spectacol!
              Echipele noastre vor concura în jocurile cele mai îndrăgite ale
              momentului, demonstrând abilități și strategii impresionante.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
