import React, { useEffect } from "react";
import clash from "../assets/img/webp/activitatisecundare/clash_fundal2.webp";
import clash2 from "../assets/img/webp/activitatisecundare/clash2.webp";
import clash_logo from "../assets/img/webp/activitatisecundare/clash_logo4.webp";
import ea from "../assets/img/webp/activitatisecundare/ea_fundal2.webp";
import ea2 from "../assets/img/webp/activitatisecundare/ea3.webp";
import ea_logo from "../assets/img/webp/activitatisecundare/ea_logo2.webp";
import hearth from "../assets/img/webp/activitatisecundare/hearth_fundal2.webp";
import hearth2 from "../assets/img/webp/activitatisecundare/hearth3.webp";
import hearth_logo from "../assets/img/webp/activitatisecundare/hearth_logo2.webp";
import mortal from "../assets/img/webp/activitatisecundare/mortal_fundal2.webp";
import mortal2 from "../assets/img/webp/activitatisecundare/mortal2.webp";
import mortal_logo from "../assets/img/webp/activitatisecundare/mortal_logo5.webp";
import tft from "../assets/img/webp/activitatisecundare/tft_final3.webp";
import tft_logo from "../assets/img/webp/activitatisecundare/tft_logo_fin.webp";
import tft2 from "../assets/img/webp/activitatisecundare/tft2.webp";

const isMobile = window.innerWidth <= 768; // verified when the page is loaded

export default function ActivitatiSecundare() {
  return (
    <div style={titleStyle} className="flex justify-center">
      <h1 className="md:mb-[-7rem] md:mt-[-4rem] text-center text-5xl tracking-widest font-bold" style={centeredTitle}>Jocuri Secundare</h1>
      <ul id="cards">
        {/* tft */}
        <li className="tft">
          {!isMobile ? ( // if the screen is not mobile, the text will be displayed on hover
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full">
                <img src={tft} alt="Imagine TFT-TeamFight Tactics" />
              </div>
              <div className="hover">
                <img src={tft_logo} alt="Imagine logo TFT-TeamFight Tactics" />
                <p className="text-white text-center p-2">
                  Teamfight Tactics, jocul strategic și captivant de la Riot Games, îți oferă o experiență unică în care ești la comanda unor campioni din League of Legends. Luptă pentru supremație tactică!
                </p>
              </div>
            </a>
          ) : ( // if the screen is mobile, the text will be displayed under the image
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full flex justify-center">
                <img src={tft2} alt="Imagine TFT-TeamFight Tactics" />
              </div>
              <div className="flex flex-wrap justify-center items-center p-4">
                <img src={tft_logo} alt="Imagine logo TFT-TeamFight Tactics" />
                <p className="text-white text-center p-2">
                  Teamfight Tactics, jocul strategic și captivant de la Riot Games, îți oferă o experiență unică în care ești la comanda unor campioni din League of Legends. Luptă pentru supremație tactică!
                </p>
              </div>
            </a>
          )}
        </li>
        {/* ea */}
        <li className="ea">
        {!isMobile ? ( // if the screen is not mobile, the text will be displayed on hover
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full">
                <img src={ea} alt="Imagine EA Sports FC" />
              </div>
              <div className="hover">
                <img src={ea_logo} alt="Imagine logo EA Sports FC" />
                <p className="text-white text-center p-2">
                  Experimentează competiția fotbalistică virtuală într-un joc impresionant, unde poți juca, crea și domina în lumea fascinantă a fotbalului electronic. Este timpul să îți arăți abilitățile!
             </p>
              </div>
            </a>
          ) : ( // if the screen is mobile, the text will be displayed under the image
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full flex justify-center">
                <img src={ea2} alt="Imagine EA Sports FC" />
              </div>
              <div className="flex flex-wrap justify-center items-center p-4">
                <img src={ea_logo} alt="Imagine logo EA Sports FC" />
                <p className="text-white text-center p-2">
                  Experimentează competiția fotbalistică virtuală într-un joc impresionant, unde poți juca, crea și domina în lumea fascinantă a fotbalului electronic. Este timpul să îți arăți abilitățile!
              </p>
              </div>
            </a>
          )}
        </li>
        {/* hearth */}
        <li className="hearth">
        {!isMobile ? ( // if the screen is not mobile, the text will be displayed on hover
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full">
                <img src={hearth} alt="Imagine Hearthstone" />
              </div>
              <div className="hover">
                <img src={hearth_logo} alt="Imagine logo Hearthstone" />
                <p className="text-white text-center p-2">
                  Descoperă un univers captivant al duelurilor magice și al strategiilor în acest joc de cărți de la Blizzard. Construiește-ți un deck unic, adună eroi și hai să te vedem luptând în lumea fermecată a Azerothului.
              </p>
              </div>
            </a>
          ) : ( // if the screen is mobile, the text will be displayed under the image
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full flex justify-center">
                <img src={hearth2} alt="Imagine Hearthstone" />
              </div>
              <div className="flex flex-wrap justify-center items-center p-4">
                <img src={hearth_logo} alt="Imagine logo Hearthstone" />
                <p className="text-white text-center p-2">
                  Descoperă un univers captivant al duelurilor magice și al strategiilor în acest joc de cărți de la Blizzard. Construiește-ți un deck unic, adună eroi și hai să te vedem luptând în lumea fermecată a Azerothului.
              </p>
              </div>
            </a>
          )}
        </li>
        {/* mortal */}
        <li className="mk">
        {!isMobile ? ( // if the screen is not mobile, the text will be displayed on hover
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full">
                <img src={mortal} alt="Imagine Mortal Kombat" />
              </div>
              <div className="hover">
                <img src={mortal_logo} alt="Imagine logo Mortal Kombat" />
                <p className="text-white text-center p-2">
                  Mortal Kombat te invită într-un univers fascinant, unde bătăliile sunt pline de mișcări spectaculoase și strategii ingenioase. Înfruntă-ți adversarii și triumfă în arena provocatoare!</p>
              </div>
            </a>
          ) : ( // if the screen is mobile, the text will be displayed under the image
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full flex justify-center">
                <img src={mortal2} alt="Imagine Mortal Kombat" />
              </div>
              <div className="flex flex-wrap justify-center items-center p-4">
                <img src={mortal_logo} alt="Imagine logo Mortal Kombat" />
                <p className="text-white text-center p-2">
                  Mortal Kombat te invită într-un univers fascinant, unde bătăliile sunt pline de mișcări spectaculoase și strategii ingenioase. Înfruntă-ți adversarii și triumfă în arena provocatoare!</p>
              </div>
            </a>
          )}
        </li>
        {/* clash */}
        <li className="clash_royale">
        {!isMobile ? ( // if the screen is not mobile, the text will be displayed on hover
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full">
                <img src={clash} alt="Imagine Clash Royale" />
              </div>
              <div className="hover">
                <img src={clash_logo} alt="Imagine logo Clash Royale" />
                <p className="text-white text-center p-2">
                Descoperă universul fascinant Clash Royale, un joc strategic ce te provoacă să-ți construiești armata și să-ți demonstrezi abilitățile în dueluri memorabile. Alătură-te acum și devino stăpânul tacticii într-o lume plină de aventură!
                </p>
              </div>
            </a>
          ) : ( // if the screen is mobile, the text will be displayed under the image
            <a target="_blank" href="https://support.riotgames.com/hc/en-us">
              <div className="w-full h-full flex justify-center">
                <img src={clash2} alt="Imagine Clash Royale" />
              </div>
              <div className="flex flex-wrap justify-center items-center p-4">
                <img src={clash_logo} alt="Imagine logo Clash Royale" />
                <p className="text-white text-center p-2">
                 Descoperă universul fascinant Clash Royale, un joc strategic ce te provoacă să-ți construiești armata și să-ți demonstrezi abilitățile în dueluri memorabile. Alătură-te acum și devino stăpânul tacticii într-o lume plină de aventură!
                </p>
              </div>
            </a>
          )}
        </li>
      </ul>
    </div>
  );
}

const titleStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const centeredTitle = {
  color: "#78e800",
};
