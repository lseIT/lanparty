import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutLanparty from "../components/AboutLanparty";
import AboutUs from "../components/AboutUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Numere from "../components/Numere";
import PartenerMedia from "../components/PartenerMedia";
import Galery from "../components/Galery";
import ButoanePrincipale from "../components/ActivitatiPrincipale";
import ActivitatiSecundare from "../components/ActivitatiSecundare";
import Cosplay from "../components/Cosplay";
import Bara from "../assets/img/webp/General usage/ELEMENt fundal.webp";
import Ambasadori from "../components/Ambasadori";
import Album from "../components/Album";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1 bg-gray-200 h-full">
          <div className="grid grid-cols-3 w-full">
            <div className=" col-span-1 bg-black h-screen"></div>
            <img src={Bara} className=" col-span-1 bg-black h-screen" />
            <div className=" col-span-1 bg-black h-screen"></div>
          </div>
        </div>
        <div className="col-span-10 bg-black h-screen overflow-auto no-scrollbar ">
          <Header />

          {/* Banner */}

          <div id="Inscrieri" className=" pt-0">
            <ButoanePrincipale />
            <ActivitatiSecundare />
            <Cosplay />
          </div>

          <div id="AboutLAN" className=" pt-0">
            <AboutLanparty />
          </div>

          <Ambasadori />

          <div id="PartenerMedia" className=" pt-32">
            <PartenerMedia />
          </div>

          {/* Sponsori */}

          <AboutUs />

          {/* Testimoniale */}

          <div id="Galerie" className=" lg:m-24 lg:px-24 lg:py-30">
            <Album />
          </div>
          <Footer />
        </div>
        <div className="col-span-1 bg-gray-200 h-full">
          <div className="grid grid-cols-3 w-full">
            <div className=" col-span-1 bg-black h-screen"></div>
            <img src={Bara} className=" col-span-1 bg-black h-screen" />
            <div className=" col-span-1 bg-black h-screen"></div>
          </div>
        </div>
      </div>
    </>
  );
}
