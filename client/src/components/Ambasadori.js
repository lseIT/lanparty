import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import poza1 from "../assets/img/webp/gallery/poze-lan-1.webp";
import poza2 from "../assets/img/webp/gallery/poze-lan-7.webp";
import poza3 from "../assets/img/webp/gallery/poze-lan-3.webp";
import poza4 from "../assets/img/webp/gallery/poze-lan-8.webp";
import poza5 from "../assets/img/webp/gallery/poze-lan-5.webp";
import poza6 from "../assets/img/webp/gallery/poze-lan-6.webp";

const MyCarousel = () => {
  return (
    <>
      {/* For Mobile Phone */}
      <div className="md:hidden flex justify-center ">
        <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
          Ambasadori <span className=" text-color-accent">Lanparty</span>
        </h1>
      </div>
      <div className="md:hidden">
        <Carousel showStatus={false} showThumbs={false} emulateTouch={true}>
          {/* Slide 1 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-full">
              <img src={poza1} alt="Image 1" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-full">
              <img src={poza2} alt="Image 1" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-full">
              <img src={poza3} alt="Image 1" />
            </div>
          </div>

          {/* Slide 4 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-full">
              <img src={poza4} alt="Image 1" />
            </div>
          </div>

          {/* Slide 5 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-full">
              <img src={poza5} alt="Image 1" />
            </div>
          </div>

          {/* Slide 6 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-full">
              <img src={poza6} alt="Image 1" />
            </div>
          </div>
        </Carousel>
      </div>

      {/* For Desktop */}
      <div className="hidden md:block ">
        <div className=" flex justify-center ">
          <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
            Ambasadori <span className=" text-color-accent">Lanparty</span>
          </h1>
        </div>
        <Carousel showStatus={false} showThumbs={false} emulateTouch={true}>
          {/* Slide 1 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={poza1} alt="Image 1" />
            </div>
            <div className="w-1/3">
              <img src={poza2} alt="Image 2" />
            </div>
            <div className="w-1/3">
              <img src={poza3} alt="Image 3" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={poza4} alt="Image 4" />
            </div>
            <div className="w-1/3">
              <img src={poza5} alt="Image 5" />
            </div>
            <div className="w-1/3">
              <img src={poza6} alt="Image 6" />
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;
