import React from "react";
import comingsoon from "../assets/ComingSoon/asset 1.jpeg";
import logo from "../assets/Signup/asset 0.png";

export const ComingSoon = () => {
  return (
    <div className=" ComingSoon-section flex">
      <div className=" Image-section">
        <img
          className="h-[730px] w-[490px] object-cover"
          src={comingsoon}
          alt=""
        ></img>
      </div>

      <div className="content-section text-center ml-48 mt-44">
        <img className="mx-auto w-56" src={logo}></img>
        <h3 className="text-4xl font-bold text-gray-800 mt-7">
          Our new website is on the way
        </h3>
        <p className="text-gray-500 px-20 mt-5 leading-7 text-base">
          We're coming soon! We're working hard to give you <br></br>the best
          experince.
        </p>

        <div className="flex ml-14 mt-8">
          <div className="rounded-full px-9 py-5 bg-blue-500 mr-4 shadow-blue-600 shadow-lg">
            <h1 className="text-3xl text-white">0</h1>
            <h1 className="text-sm text-white">Day</h1>
          </div>

          <div className="rounded-full px-8 py-5 bg-blue-500 mr-4 shadow-blue-600 shadow-lg">
            <h1 className="text-3xl text-white">00</h1>
            <h1 className="text-sm text-white">Hrs</h1>
          </div>

          <div className=" rounded-full px-8 py-5 bg-blue-500 mr-4 shadow-blue-600 shadow-lg">
            <h1 className="text-3xl text-white">00</h1>
            <h1 className="text-sm text-white">Min</h1>
          </div>

          <div className=" rounded-full px-8 py-5 bg-blue-500 mr-4 shadow-blue-600 shadow-lg">
            <h1 className="text-3xl text-white">00</h1>
            <h1 className="text-sm text-white">Sec</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

