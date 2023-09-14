import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutLanparty from "../components/AboutLanparty";
import AboutUs from "../components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Numere from "../components/Numere";
import PartenerMedia from "../components/PartenerMedia";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1 bg-gray-200 h-full">
          <div className="grid grid-cols-3 w-full">
            <div className=" col-span-1 bg-black h-screen"></div>
            <div className=" col-span-1 bg-color-accent h-screen"></div>
            <div className=" col-span-1 bg-black h-screen"></div>
          </div>
        </div>
        <div className="col-span-10 bg-black h-screen overflow-auto no-scrollbar ">
          <Header />
          <AboutUs />
          <AboutLanparty />
          <PartenerMedia />
          <Footer />
        </div>
        <div className="col-span-1 bg-gray-200 h-full">
          <div className="grid grid-cols-3 w-full">
            <div className=" col-span-1 bg-black h-screen"></div>
            <div className=" col-span-1 bg-color-accent h-screen"></div>
            <div className=" col-span-1 bg-black h-screen"></div>
          </div>
        </div>
      </div>
    </>
  );
}
