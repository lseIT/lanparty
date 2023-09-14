import React from "react";

export default function SocialIcons({ Icons }) {
  return (
    <div className="text-teal-500">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-[#103d1b] mx-1.5 text-xl hover:text-gray-100 hover:bg-green-600
        duration-300 "
        >
          <div className="socialIcons">
            <a href={icon.link} target="_blank" rel="noreferrer">
              <i class={icon.name} style={{ color: "#ffffff" }}></i>
            </a>
          </div>
        </span>
      ))}
    </div>
  );
}
