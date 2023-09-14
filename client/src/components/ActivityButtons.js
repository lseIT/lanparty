import React from "react";
import {Button} from "reactstrap";

export default function ActivityButtons(){
    const openLink1 = () => {
        const link = 'https://www.theedgerehab.com/gaming-addiction-treatment/league-of-legends-lol/';
        window.open(link);
    }
    const openLink2 = () => {
        const link = 'https://we.care/en/online-therapy-and-performance-coaching-specialized-for-csgo-players/';
        window.open(link);
    }
    return (
    <>  <h1>HELLOOOOO</h1>
        <button onClick={openLink1}>
            Mama
        </button>
    </>
    );
}