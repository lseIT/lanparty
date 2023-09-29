import React from "react";
import cs2 from "../assets/img/webp/Lol-CS/cs2.webp";
import logo_cs from "../assets/img/webp/Lol-CS/logo_cs.webp";
import logo_lol from "../assets/img/webp/Lol-CS/logo_lol.webp";
import lol from "../assets/img/webp/Lol-CS/lol.webp";

export default function ButoanePrincipale(){

    return (
    
    <ul id="cards">
        <li className="lol">
            <a target="_blank" href="https://forms.gle/zvgg1Yw8ScXwKX9UA">
                <div className="w-full h-full"><img src={lol}/></div>
                
                <div className="hover">
                    <img src={logo_lol}></img>
                    <label>
                        Click aici
                    </label>
                    <label>
                        Pentru inscriere
                    </label>
                </div>
                
            </a>
        </li>

        <li className="cs" >
            <a target="_blank" href="https://forms.gle/vmT3SvdVtWKkQsUPA">
                <div className="w-full h-full"><img src={cs2}/></div>
                
                <div className="hover">
                    <img src={logo_cs}/>
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