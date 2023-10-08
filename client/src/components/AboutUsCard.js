import React from "react";

export default function AboutUsCard(props) {
  return (
    <>
      <div className=" w-fit  bg-white flex rounded-xl md:mx-12 md:my-3 m-3 select-none">
        <div className=" bg-[#78e800] rounded-lg"></div>
        <div className="md:p-2 md:px-5  ">
          <p className=" md:text-2xl font-bold text-sm uppercase text-center items-center p-1">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}
