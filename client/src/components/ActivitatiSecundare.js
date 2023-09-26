import React from "react";
import clash from "../assets/img/webp/activitatisecundare/clash_fundal2.webp";
import clash_logo from "../assets/img/webp/activitatisecundare/clash_logo4.webp";
import ea from "../assets/img/webp/activitatisecundare/ea_fundal2.webp";
import ea_logo from "../assets/img/webp/activitatisecundare/ea_logo2.webp";
import hearth from "../assets/img/webp/activitatisecundare/hearth_fundal2.webp";
import hearth_logo from "../assets/img/webp/activitatisecundare/hearth_logo2.webp";
import mortal from "../assets/img/webp/activitatisecundare/mortal_fundal2.webp";
import mortal_logo from "../assets/img/webp/activitatisecundare/mortal_logo5.webp";
import tft from "../assets/img/webp/activitatisecundare/tft_final3.webp";
import tft_logo from "../assets/img/webp/activitatisecundare/tft_logo_fin.webp";

export default function ActivitatiSecundare()
{
    return (
        <ul id="cards">
            {/* tft */}
            <li className="tft">
                <a target="_blank" href="https://support.riotgames.com/hc/en-us">
                    <div className="w-full h-full"><img src={tft} alt="Imagine TFT-TeamFight Tactics"/></div>
                    <div className="hover">
                        <img src={tft_logo} alt="Imagine logo TFT-TeamFight Tactics"></img>
                        {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
                        <p className="text-white text-center p-2">
                        Teamfight Tactics, jocul strategic și captivant de la Riot Games, îți oferă o experiență unică în care ești la comanda unor campioni din League of Legends. Luptă pentru supremație tactică!
                        </p>
                    </div>
                </a>
            </li>
            {/* ea */}
            <li className="ea" >
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={ea} alt="Imagine Ea Sports FC"/></div>
                    <div className="hover">
                        <img src={ea_logo} alt="Imagine Logo Ea Sports FC"/>
                        {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
                        <p className="text-white text-center p-2">
                        Experimentează competiția fotbalistică virtuală într-un joc impresionant, unde poți juca, crea și domina în lumea fascinantă a fotbalului electronic. Este timpul să îți arăți abilitățile!
                        </p>
                    </div>
                </a>
            </li>
            {/* hearth */}
            <li className="hearth">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={hearth} alt="Imagine Hearthstone"/></div>
                    <div className="hover">
                        <img src={hearth_logo} alt="Imagine Logo Hearthstone"/>
                        {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
                        <p className="text-white text-center p-2">
                        Descoperă un univers captivant al duelurilor magice și al strategiilor în acest joc de cărți de la Blizzard. Construiește-ți un deck unic, adună eroi și hai să te vedem luptând în lumea fermecată a Azerothului.
                         </p>
                    </div>
                </a>
            </li>
            {/* mortal */}
            <li className="mk">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={mortal} alt="Imagine Mortal Kombat"/></div>
                    <div className="hover">
                        <img src={mortal_logo} alt="Imagine Logo Mortal Kombat"/>
                        {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
                        <p className="text-white text-center p-2">
                        Mortal Kombat te invită într-un univers fascinant, unde bătăliile sunt pline de mișcări spectaculoase și strategii ingenioase. Înfruntă-ți adversarii și triumfă în arena provocatoare!
                        </p>
                    </div>
                </a>
            </li>
            {/* clash */}
            <li className="clash_royale">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={clash} alt="Imagine Clash Royale"/></div>
                    <div className="hover">
                        <img src={clash_logo} alt="Imagine Logo Clash Royale"/>
                        {/* <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label> */}
                        <p className="text-white text-center p-2">
                        Descoperă universul fascinant Clash Royale, un joc strategic ce te provoacă să-ți construiești armata și să-ți demonstrezi abilitățile în dueluri memorabile. Alătură-te acum și devino stăpânul tacticii într-o lume plină de aventură!
                        </p>
                    </div>
                </a>
            </li>
        </ul>    
        );
}
