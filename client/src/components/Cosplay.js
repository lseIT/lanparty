import React from "react";
import Poza from "../assets/img/Cosplay.webp";

function SignupButton() {
  const googleFormLink = "https://docs.google.com/forms/d/e/..."; // Înlocuiți cu linkul dvs.

  return (
    <a
      href={googleFormLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#78e800] text-black px-32 py-2 rounded-lg hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover: duration-300 font-bold"
    >
      Înscrie-te
    </a>
  );
}

function Cosplay() {
  return (
    <>
      <div className="flex justify-center pt-9">
        <div>
          <span>
            <center className="pt-16">
              <img className="w-80 rounded-lg" src={Poza}></img>
            </center>
          </span>
          <span>
            <center className=" pb-16">{SignupButton()}</center>
          </span>
        </div>
        <div>
          <span>
            <center className="pt-16">
              <img className="w-80 rounded-lg" src={Poza}></img>
            </center>
          </span>
          <span>
            <center className=" pb-16">{SignupButton()}</center>
          </span>
        </div>
      </div>
    </>
  );
}

export default Cosplay;
