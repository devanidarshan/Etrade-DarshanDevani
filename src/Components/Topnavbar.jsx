import React from "react";

export const Topnavbar = () => {
  return (
    <div className="TOP-NAVBAR-SECTION bg-[#292930]">
      <div className="Main-Topnavbar-section p-1 flex justify-around bg-[#292930] mx-auto container">
        <div className="DROPDOWN flex mr-[40%]">
          <div className="group">
            <button className="btn-relative text-gray-300 text-sm" type="button">
              English<i class="fa-solid fa-angle-down pl-1"></i>
            </button>
            <ul className="bg-transparent cursor-pointer  text-md mr-3 opacity-0 group-hover:opacity-100 absolute left-30 p-2 m-auto bg-white">
              <li className=" bg-white text-black hover:bg-pink-400 duration-300 rounded-md m-auto">
                English
              </li>
              <li className="bg-white text-black hover:bg-pink-400 duration-300 rounded-md ">
                Arabic
              </li>
              <li className="bg-white text-black hover:bg-pink-400 duration-300 rounded-md">
                Spanish
              </li>
            </ul>
          </div>

          <div className="group">
            <button className="ml-12 text-gray-300 text-sm " type="button">
              USD<i class="fa-solid fa-angle-down pl-1"></i>
            </button>
            <ul className="bg-transparent cursor-pointer text-md  text-gray-500 opacity-0  group-hover:opacity-100 absolute left-[16%] m-auto p-2">
              <li className="bg-white text-black hover:bg-pink-400 duration-300 rounded-md px-3">
                USD
              </li>
              <li className="bg-white text-black hover:bg-pink-400 duration-300 rounded-md px-3">
                AUD
              </li>
              <li className="bg-white text-black hover:bg-pink-400 duration-300 rounded-md px-3">
                EUR
              </li>
            </ul>
          </div>
        </div>

        <div className="RIGHT-SECTION">
          <div className=" list-none flex text-sm ">
            <li className=" cursor-pointer hover:text-blue-600 duration-500 ml-6 text-gray-300">
              Help
            </li>
            <li className="cursor-pointer hover:text-blue-600 duration-500 ml-6 text-gray-300">
              Join Us
            </li>
            <li className="cursor-pointer hover:text-blue-600 duration-500 ml-6 text-gray-300">
              Sign In
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
