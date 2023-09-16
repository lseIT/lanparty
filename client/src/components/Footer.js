import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-black border-4 border-[#78e800] rounded-lg md:rounded-full text-white w-full z-10 mt-20">
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-1
        text-center pt-4 text-white text-md pb-3 content-around"
      >
        <span className="p-2 md:p-0">
          Departamentul IT © 2023. Toate drepturile rezervate.
        </span>
        <span className="p-2 md:p-0">Terms · Privacy Policy </span>
        <div className="grid grid-cols-3 w-32 m-auto p-3 md:-translate-y-1">
          <a
            href="https://www.instagram.com/ligastudentilorelectronistilse/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={25} />
          </a>
          <a
            href="https://www.facebook.com/lseorgro"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={25} />
          </a>
          <a
            href="https://www.youtube.com/@lsebucuresti"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}
