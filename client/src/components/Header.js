import React from "react";
import LANParty_logo from "../assets/img/LogoWhite.webp";

import "bootstrap/dist/css/bootstrap.min.css";
import { transform } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-black border-4 rounded-lg opacity-80 border-color-accent sticky top-0 z-10 w-full">
    <div className="mx-auto w-full px-5 py-4 md:px-8 md:py-0 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
            <img src={LANParty_logo} className="h-10"></img>
        </div>
  
        <div className="mt-0 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <button
            className="block rounded-lg px-2 py-2 text-sm font-medium text-white transition hover:bg-color-accent hover:opacity-100 focus:outline-none focus:ring"
            type="button"
           
          >
            <span className="text-sm font-medium"> Înscrie-te și tu </span>
          </button>
  
          <button
            className="block rounded-lg px-2 py-2 text-sm font-medium text-white transition hover:bg-color-accent hover:opacity-100 focus:outline-none focus:ring"
            type="button"
            onClick={() => {
              window.location.href = "#AboutLSE";
            }}
          >
            About LSE
          </button>

          <button
            className="block rounded-lg px-2 py-2 text-sm font-medium text-white transition hover:bg-color-accent hover:opacity-100 focus:outline-none focus:ring"
            type="button"
          >
            Ambasadori
          </button>

          <button
            className="block rounded-lg px-2 py-2 text-sm font-medium text-white transition hover:bg-color-accent hover:opacity-100 focus:outline-none focus:ring"
            type="button"
            onClick={() => {
              window.location.href = "#PartenerMedia";
            }}
          >
            Parteneri
          </button>
          
          <button
            className="block rounded-lg px-2 py-2 text-sm font-medium text-white transition hover:bg-color-accent hover:opacity-100 focus:outline-none focus:ring"
            type="button"
            onClick={() => {
              window.location.href = "#Galerie";
            }}
          >
            Galerie
          </button>

        </div>
      </div>
    </div>
  </header>
  );
}
