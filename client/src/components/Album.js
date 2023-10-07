import { useRef, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { slides } from "../config/configAlbum";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Album() {
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
      <motion.div
        ref={ref}
        id="Galerie"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showStatus={false}
          interval={4000}
          emulateTouch={true}
          autoPlay={true}
        >
          {slides.map((slide, slideIndex) => {
            const altText = "Poza " + slideIndex;
            return (
              <div>
                <img src={slide.url} alt={altText} className=" rounded-xl" />
              </div>
            );
          })}
        </Carousel>
      </motion.div>
    </>
  );
}
