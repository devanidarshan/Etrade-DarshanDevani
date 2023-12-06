import React from "react";
import error from "../assets/404Error/404.png"
import {SubFooter} from "../Home/SubFooter"
import {Topnavbar} from "../Components/Topnavbar"
import {Navbar} from "../Components/Navbar"
import {Bgimg} from "../Components/Bgimg"

export const Error = () => {
  return (
    <>

    <div>
      <Topnavbar/>
    </div>

    <div>
      <Navbar/>
    </div>

    <div>
      <Bgimg/>
    </div>

    <div className="ERROR-SECTION mx-auto container">
      <div className="flex justify-around mt-28">
        <div className="CONTENT-SECTION ml-20">
          <div className="flex mt-20">
            <i class="fa-solid fa-circle-exclamation border bg-[#ff497c] text-white rounded-full p-2"></i>
            <p className="text-[#ff497c] text-sm font-semibold ml-3 mt-1">Oops! Somthing's missing.</p>
          </div>

          <h1 className="text-5xl font-semibold text-gray-800 mt-3">Page not found</h1>
          <p className="text-gray-500 mt-9">
            It seems like we dont find what you searched. The page you were{" "}
            <br />
            looking for doesn't exist, isn't available loading incorrectly.
          </p>
          <button className="border rounded-lg bg-[#ff497c] px-10 py-4 text-white text-md font-semibold mt-10" type="button">
            Back To Home<i class="fa-solid fa-arrow-right text-white ml-3"></i>
          </button>
        </div>

        <div className="IMAGE-SECTION mr-20">
          <img className="h-[400px] w-[600px]" src={error}></img>
        </div>
      </div>
    </div>

    <div>
      <SubFooter/>
    </div>
    </>
  );
};
