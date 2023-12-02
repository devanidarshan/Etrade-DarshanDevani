import React from 'react';
import { Topnavbar } from "../Components/Topnavbar";
import { Navbar } from "../Components/Navbar";
import { Bgimg } from "../Components/Bgimg";
import alexa from "../assets/Bloglist/asset 2.png";
import {Footer} from "../Home/Footer"

export const Shopnosidebar = () => {
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

    <div className="first-part flex bg-[#f8f8f8] justify-between p-12 mx-auto container">
        <div className="mx-16">
          <p className="text-gray-400 font-semibold">
            Home | <span className="text-blue-500">My Account</span>
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-5">Explore All Products</h1>
        </div>
        <div className="mx-16">
          <img className="" src={alexa}></img>
        </div>
      </div>

    <div>
      <Footer/>
    </div>
    </>
  )
}

