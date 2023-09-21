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

export default function JocuriSecundare()
{
    return (
        <ul id="cards">
            {/* tft */}
            <li className="tft">
                <a target="_blank" href="https://support.riotgames.com/hc/en-us">
                    <div className="w-full h-full"><img src={tft} alt="Imagine TFT-TeamFight Tactics"/></div>
                    <div className="hover">
                        <img src={tft_logo} alt="Imagine logo TFT-TeamFight Tactics"></img>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            {/* ea */}
            <li className="ea" >
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={ea} alt="Imagine Ea Sports FC"/></div>
                    <div className="hover">
                        <img src={ea_logo} alt="Imagine Logo Ea Sports FC"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            {/* hearth */}
            <li className="hearth">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={hearth} alt="Imagine Hearthstone"/></div>
                    <div className="hover">
                        <img src={hearth_logo} alt="Imagine Logo Hearthstone"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            {/* mortal */}
            <li className="mk">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={mortal} alt="Imagine Mortal Kombat"/></div>
                    <div className="hover">
                        <img src={mortal_logo} alt="Imagine Logo Mortal Kombat"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            {/* clash */}
            <li className="clash_royale">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={clash} alt="Imagine Clash Royale"/></div>
                    <div className="hover">
                        <img src={clash_logo} alt="Imagine Logo Clash Royale"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
        </ul>    
        );
}
