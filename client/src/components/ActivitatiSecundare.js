import React from "react";
import cs2 from "../assets/img/webp/Lol-CS/cs2.webp";
import logo_cs from "../assets/img/webp/Lol-CS/logo_cs.webp";
import logo_lol from "../assets/img/webp/Lol-CS/logo_lol.webp";
import lol from "../assets/img/webp/Lol-CS/lol.webp";

import tft from "../assets/img/webp/activitatisecundare/tft_fara_logo.webp";
import ea from "../assets/img/webp/activitatisecundare/ea_rosu.webp";
import hearth from "../assets/img/webp/activitatisecundare/hearthstone.webp";
import mortal from "../assets/img/webp/activitatisecundare/mortal.webp";
import clash from "../assets/img/webp/activitatisecundare/clash-royale.webp";
import logo_tft from "../assets/img/webp/activitatisecundare/tft_logo.webp";
import bg_tft from "../assets/img/webp/activitatisecundare/teamfight.webp";

export default function JocuriSecundare()
{
    return (
        <ul id="cards">
            <li className="lol">
                <a target="_blank" href="https://support.riotgames.com/hc/en-us">
                    <div className="w-full h-full"><img src={bg_tft} alt="Imagine TFT-TeamFight Tactics"/></div>
                    <div className="hover">
                        <img src={logo_tft} alt="Imagine logo TFT-TeamFight Tactics"></img>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            <li className="ea_sports" >
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={ea} alt="Imagine Ea Sports FC"/></div>
                    <div className="hover">
                        <img src={ea} alt="Imagine Logo Ea Sports FC"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            <li className="hearthstone">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={hearth} alt="Imagine Hearthstone"/></div>
                    <div className="hover">
                        <img src={hearth} alt="Imagine Logo Hearthstone"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            <li className="mortal_kombat">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={mortal} alt="Imagine Mortal Kombat"/></div>
                    <div className="hover">
                        <img src={mortal} alt="Imagine Logo Mortal Kombat"/>
                        <label>
                            Click aici
                        </label>
                        <label>
                            Pentru inscriere
                        </label>
                    </div>
                </a>
            </li>
            <li className="clash">
                <a target="_blank" href="https://www.counter-strike.net/news">
                    <div className="w-full h-full"><img src={clash} alt="Imagine Clash Royale"/></div>
                    <div className="hover">
                        <img src={clash} alt="Imagine Logo Clash Royale"/>
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
