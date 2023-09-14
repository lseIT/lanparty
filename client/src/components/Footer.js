import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "../assets/mapping/Menus";

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-green-700 to-green-900 text-white w-full z-10 ">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
        text-center pt-2 text-white text-sm pb-8"
      >
        <span>Departamentul IT © 2023. Toate drepturile rezervate.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
}
