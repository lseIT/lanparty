import React from "react";
import Poza from "../assets/img/Colaj.png";

function SignupButton() {
  const googleFormLink = "https://docs.google.com/forms/d/e/..."; // Înlocuiți cu linkul dvs.

  return (
    <a
      href={googleFormLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#78e800] text-black text-xl px-80 py-6 rounded-lg hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover: duration-300 font-bold"
    >
      Înscrie-te
    </a>
  );
}

function Cosplay() {
  return (
    <>
      <center className="text-3xl font-bold text-[#78e800]">COSPLAY</center>
      <div className="flex-wrap rounded-lg">
        <div className="relative w-128 rounded-lg mx-auto mt-16">
          <img className="w-full rounded-lg" src={Poza} alt="Descriere pentru imagine" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-3xl text-white hover:duration-300 hover:bg-opacity-0 bg-black px-2 py-1 rounded">
            Competiția cosplay la LanParty LSE: tehnologia întâlnește arta și pasiunea.

            </span>
          </div>
        </div>
        <div className="text-center pt-16 pb-32">
          {SignupButton()}
        </div>
      </div>
    </>
  );
}
//vrem vreme buna muie lu furtuna ce nu ne a lasat sa punem animatia

export default Cosplay;
