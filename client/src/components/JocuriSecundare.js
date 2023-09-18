import React from "react";
import cs2 from "../assets/img/webp/Lol-CS/cs2.webp";
import logo_cs from "../assets/img/webp/Lol-CS/logo_cs.webp";
import logo_lol from "../assets/img/webp/Lol-CS/logo_lol.webp";
import lol from "../assets/img/webp/Lol-CS/lol.webp";

import tft from "../assets/img/webp/JocuriSecundare/tft_fara_logo.webp";
import ea from "../assets/img/webp/JocuriSecundare/ea_rosu.webp";
import hearth from "../assets/img/webp/JocuriSecundare/hearthstone.webp";
import mortal from "../assets/img/webp/JocuriSecundare/mortal.webp";
import clash from "../assets/img/webp/JocuriSecundare/clash-royale.webp";
import "../App.css";


export default function JocuriSecundare()
{
    return (
    
        <ul id="cards">
            <li className="lol">
                <a target="_blank" href="https://support.riotgames.com/hc/en-us">
                    <div className="w-full h-full"><img src={tft}/></div>
                    
                    <div className="hover">
                        <img src={tft}></img>
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
                    <div className="w-full h-full"><img src={ea}/></div>
                    
                    <div className="hover">
                        <img src={ea}/>
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
                    <div className="w-full h-full"><img src={hearth}/></div>

                    <div className="hover">
                        <img src={hearth}/>
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
                    <div className="w-full h-full"><img src={mortal}/></div>

                    <div className="hover">
                        <img src={mortal}/>
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
                    <div className="w-full h-full"><img src={clash}/></div>

                    <div className="hover">
                        <img src={clash}/>
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
