import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { slides } from "../config/configAlbum";
export default function Album() {
  return (
    <>
      <Carousel showArrows={true}>
        {slides.map((slide, slideIndex) => (
          <div>
            <img src={slide.url} alt="poza" className=" rounded-xl" />
          </div>
        ))}
      </Carousel>
    </>
  );
}
