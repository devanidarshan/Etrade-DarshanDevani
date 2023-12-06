import React from "react";
import bgimg from '../assets/About/asset 34.png'

export const Bgimg = () => {
  return (
    <div className="BG-IMAGE">
      <div className="offer relative flex justify-center items-center -z-10 ">
        <img
          className="h-16 object-cover w-full"
          src={bgimg}
          alt=""
        />
        <div className="absolute text-white">
          <i class="ri-arrow-left-line mr-10"></i>
          <a className=" font-bold ">
            STUDENT NOW GET 10% OFF :{" "}
            <span className="underline hover:text-[#FF497C] duration-700">
              GET OFFER
            </span>
          </a>
          <i class="ri-arrow-right-line ml-10"></i>
        </div>
      </div>
    </div>
  );
};
