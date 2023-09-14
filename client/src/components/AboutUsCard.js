import React from "react";

export default function AboutUsCard(props) {
  return (
    <>
      <a href="https://lsebucuresti.org/" target="_blank" rel="noreferrer">
        <div className=" w-fit bg-white flex rounded-xl md:mx-12 md:my-3 m-3">
          <div className=" bg-[#78e800] rounded-lg">
            <img
              src={props.logo}
              className="md:h-9 h-7 md:m-2 m-1"
              alt="LSE Logo"
            />
          </div>
          <div className="md:p-2 md:px-5 p-1">
            <p className=" md:text-2xl font-bold text-sm uppercase">
              {props.name}
            </p>
          </div>
        </div>
      </a>
    </>
  );
}
