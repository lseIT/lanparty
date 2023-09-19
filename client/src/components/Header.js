"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className=" sticky top-0 z-10 rounded-div flex items-center justify-between h-20 font-bold w-full bg-black text-white">
        <h1 className="text-2xl uppercase">
          Lan<span className="text-color-accent">Party</span>
        </h1>
        <div className=" hidden md:block">
          <a
            href="#Inscrieri"
            className=" p-4 duration-300 hover:text-color-accent no-underline"
          >
            {" "}
            Înscrieri
          </a>
          <a
            href="#AboutLAN"
            className=" no-underline p-4 duration-300 hover:text-color-accent px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
          >
            {" "}
            About
          </a>
          <a
            href="#Ambasadori"
            className=" no-underline duration-300 hover:text-color-accent px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
          >
            {" "}
            Ambasadori
          </a>
          <a
            href="#Parteneri"
            className=" no-underline duration-300 hover:text-color-accent px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
          >
            {" "}
            Parteneri
          </a>
          <a
            href="#Galerie"
            className=" no-underline duration-300 hover:text-color-accent px-5 py-2 ml-2 rounded-2xl shaodw-lg hover:shadow-2xl"
          >
            {" "}
            Galerie
          </a>
        </div>
        <div
          onClick={handleNav}
          className="block md:hidden cursor-pointer z-10"
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed right-10 top-20 flex flex-col items-center justify-between w-[80%] h-fit border-2 border-color-accent bg-black ease-in duration-500 z-10  rounded-lg"
              : "fixed right-[-100%] w-[80%] top-20 h-fit flex flex-col items-center justify-between ease-in duration-500"
          }
        >
          <ul className="w-full p-4 ">
            <li className=" py-6 border-b">
              <a href="#Inscrieri">Înscrieri</a>
            </li>
            <li className=" py-6 border-b">
              <a href="#AboutLAN">About</a>
            </li>
            <li className=" py-6 border-b">
              <a href="#Ambasadori">Ambasadori</a>
            </li>
            <li className=" py-6 border-b">
              <a href="#Parteneri">Parteneri</a>
            </li>
            <li className=" py-6 border-b">
              <a href="#Galerie">Galerie</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
