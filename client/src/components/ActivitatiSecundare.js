import React from "react";
import ea from "../assets/img/jocuri/Frame 29.webp";
import ea_logo from "../assets/img/webp/activitatisecundare/ea_logo2.webp";
import hearth from "../assets/img/jocuri/Frame 30.webp";
import hearth_logo from "../assets/img/webp/activitatisecundare/hearth_logo2.webp";
import mortal from "../assets/img/jocuri/Frame 31.webp";
import mortal_logo from "../assets/img/webp/activitatisecundare/mortal_logo5.webp";
import tft from "../assets/img/jocuri/Frame 28.webp";
import tft_logo from "../assets/img/webp/activitatisecundare/tft_logo_fin.webp";
import Countdown from "./Countdown";

export default function ActivitatiSecundare() {
  return (
    <>
      {" "}
      <div className="">
      <div className="mb-5 w-full flex justify-center  font-extrabold leading-none tracking-tight text-white text-1234xl lg:text-7xl md:text-5xl sm:text-3xl">
        Competiții Secundare
      </div>
      <div className="text-center">
        <Countdown
          numarMinute={25920}
          text={"Înscrierile se pot face si in ziua evenimentului"}
        />
      </div>
      <ul id="cards" className="grid grid-cols-4 gap-4 ">
        {/* tft */}
        <li className="tft">
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfyqwwA_56yZcjYe4J_tujYuwY9oJ43HDx4slhqT2M4lh6EJA/viewform?usp=sharing">
            <div className="w-full h-full">
              <img src={tft} alt="Imagine TFT-TeamFight Tactics" />
            </div>
            <div className="hover">
              <img
                src={tft_logo}
                alt="Imagine logo TFT-TeamFight Tactics"
              ></img>
              {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
              <p className="text-white text-center p-2 h-full w-full">
                Teamfight Tactics, jocul strategic și captivant de la Riot
                Games, îți oferă o experiență unică în care ești la comanda unor
                campioni din League of Legends. Luptă pentru supremație tactică!
              </p>
            </div>
          </a>
        </li>
        {/* ea */}
        <li className="ea">
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeYV2jJNGMNwNTnrD_pHrvrf72bgGRNCsqDY8MuE5sr3SgJqQ/viewform?usp=sharing">
            <div className="w-full h-full">
              <img src={ea} alt="Imagine Ea Sports FC" />
            </div>
            <div className="hover">
              <img src={ea_logo} alt="Imagine Logo Ea Sports FC" />
              {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
              <p className="text-white text-center p-2">
                Experimentează competiția fotbalistică virtuală într-un joc
                impresionant, unde poți juca, crea și domina în lumea fascinantă
                a fotbalului electronic. Este timpul să îți arăți abilitățile!
              </p>
            </div>
          </a>
        </li>
        {/* hearth */}
        <li className="hearth">
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSedWfrBa8035rhXlhxUjkrTUz5G1Un1ou8kXLvCyD0Te18HJA/viewform?usp=sharing">
            <div className="w-full h-full">
              <img src={hearth} alt="Imagine Hearthstone" />
            </div>
            <div className="hover">
              <img src={hearth_logo} alt="Imagine Logo Hearthstone" />
              {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
              <p className="text-white text-center p-2">
                Descoperă un univers captivant al duelurilor magice și al
                strategiilor în acest joc de cărți de la Blizzard.
                Construiește-ți un deck unic, adună eroi și hai să te vedem
                luptând în lumea fermecată a Azerothului.
              </p>
            </div>
          </a>
        </li>
        {/* mortal */}
        <li className="mk">
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdtLx-l-SaX-zhGNIv4586bAFJjd5GgIoB-tYS92ZSWsY6V0A/viewform?usp=sharing">
            <div className="w-full h-full">
              <img src={mortal} alt="Imagine Mortal Kombat" />
            </div>
            <div className="hover">
              <img src={mortal_logo} alt="Imagine Logo Mortal Kombat" />
              {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */
              }
              <p className="text-white text-center scale-75 h-full w-full">
                Mortal Kombat te invită într-un univers fascinant, unde
                bătăliile sunt pline de mișcări spectaculoase și strategii
                ingenioase. Înfruntă-ți adversarii și triumfă în arena
                provocatoare!
              </p>
            </div>
          </a>
        </li>
        {/* clash */}
      </ul>
      </div>
    </>

  );
}
