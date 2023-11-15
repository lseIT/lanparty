import React from "react";

export default function AboutUsCard(props) {
  return (
    <>
      <div className=" w-fit border border-black bg-[#78e800] justify-center md:h-24 md:w-2/5 flex rounded-xl md:mx-12 md:my-3 m-3 select-none">
        <div className=" bg-[#78e800] rounded-lg text-center flex justify-center"></div>
        <div className="md:p-2 md:px-5 text-center  flex items-center justify-center ">
          <p className=" md:text-2xl font-bold text-sm uppercase text-center mx-auto items-center p-1 flex justify-center">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
}
