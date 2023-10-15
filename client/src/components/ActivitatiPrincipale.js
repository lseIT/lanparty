import React from "react";
import cs2 from "../assets/img/jocuri/Frame 26.webp";
import logo_cs from "../assets/img/webp/Lol-CS/logo_cs.webp";
import logo_lol from "../assets/img/webp/Lol-CS/logo_lol.webp";
import lol from "../assets/img/jocuri/Frame 27.webp";
import Countdown from "./Countdown";

export default function ButoanePrincipale() {
  return (
    <ul id="cards">
      <div className="mb-20 lg:mb-32  w-full flex justify-center  font-extrabold leading-none tracking-tight text-white pr-1 ml-15  md:ml-0  text-1234xl lg:text-7xl md:text-5xl sm:text-3xl">
        Competiții Principale
      </div>
      <Countdown numarMinute={0} text={"Înscrierile se termină în"} />
      <li className="lol">
        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdMZfdrDzur9c2WW6xu922Xj4WyH5raYbyqriq01Y65-3wguw/viewform">
          <div className="w-full h-full">
            <img src={lol} />
          </div>
          <div className="hover">
            <img src={logo_lol}></img>
            <label className="fontFamily-montserrat">Click aici</label>
            <label className="fontFamily-montserrat">Pentru inscriere</label>
          </div>
        </a>
      </li>

      <li className="cs">
        <a target="_blank" href="https://forms.gle/vmT3SvdVtWKkQsUPA">
          <div className="w-full h-full">
            <img src={cs2} />
          </div>

          <div className="hover">
            <img src={logo_cs} />
            <label>Click aici</label>
            <label>Pentru inscriere</label>
          </div>
        </a>
      </li>
    </ul>
  );
}
