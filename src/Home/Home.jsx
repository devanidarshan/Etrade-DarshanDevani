import React from "react";
import bgimg1 from "../assets/Homepage/asset 8.png";
import bgimg2 from "../assets/Homepage/asset 9.png";
import rimage1 from "../assets/Homepage/asset 2.png";
import rimage2 from "../assets/Homepage/asset 3.png";
import rimage3 from "../assets/Homepage/asset 4.png";
import rimage4 from "../assets/Homepage/asset 5.png";
import phones from "../assets/Homepage/asset 15.png";
import computers from "../assets/Homepage/asset 16.png";
import accesories from "../assets/Homepage/asset 17.png";
import laptops from "../assets/Homepage/asset 18.png";
import monitors from "../assets/Homepage/asset 19.png";
import networking from "../assets/Homepage/asset 10.png";
import pcgaming from "../assets/Homepage/asset 11.png";
import feed1 from "../assets/Homepage/asset 31.png";
import feed2 from "../assets/Homepage/asset 29.png";
import feed3 from "../assets/Homepage/asset 30.png";
import Logo from "../assets/Homepage/asset 0.png";
import delivery from "../assets/Homepage/asset 40.png";
import product from "../assets/Homepage/asset 41.png";
import policy from "../assets/Homepage/asset 42.png";
import policyy from "../assets/Homepage/asset 43.png";
import quality from "../assets/Homepage/asset 44.png";
import sound from "../assets/Homepage/asset 45.png";
import glass from "../assets/Homepage/asset 46.png";
import { Footer } from "../Home/Footer";

export const Home = () => {
  return (
    <>
      {/* Header-section */}

      <div className="Main-Header bg-[#f9f3f0] h-[800px] px-24 mx-auto container">
        <div className="Header  flex justify-between pb-4">
          <div className="Left-section ">
            <div className="Main-left-section pt-2 ">
              <div className="Dropdown flex">
                <div className="group">
                  <button className="btn-relative text-gray-500 " type="button">
                    English<i class="fa-solid fa-angle-down pl-1"></i>
                  </button>
                  <ul className="bg-transparent cursor-pointer  text-md mr-3 opacity-0 group-hover:opacity-100 absolute left-30 p-2 m-auto bg-white">
                    <li className=" bg-white text-black hover:bg-pink-400 duration-300 rounded-md m-auto ">
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
                  <button className="ml-12 text-gray-500 " type="button">
                    USD<i class="fa-solid fa-angle-down pl-1"></i>
                  </button>
                  <ul className="bg-transparent cursor-pointer text-md  text-gray-500 opacity-0  group-hover:opacity-100 absolute left-48 m-auto   ">
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
            </div>
          </div>

          <div className="Right-section">
            <div className=" list-none flex text-md mt-2  ">
              <li className=" cursor-pointer hover:text-blue-600 duration-500 ml-6 text-gray-500">
                Help
              </li>
              <li className="cursor-pointer hover:text-blue-600 duration-500 ml-6 text-gray-500">
                Join Us
              </li>
              <li className="cursor-pointer hover:text-blue-600 duration-500 ml-6 text-gray-500">
                Sign In
              </li>
            </div>
          </div>
        </div>

        {/* NavBar */}

        <div className="bg-white h-20 px-10 rounded-md py-5 flex align-middle justify-between">
          <div className="Logo">
            <img className="" src={Logo}></img>
          </div>

          <div className="NavBar flex ">
            <div className="group flex">
              <button
                className=" relative font-bold mx-7  underline decoration-[2px] underline-offset-4"
                type="button"
              >
                Home<i class="fa-solid fa-angle-down text-gray-400 pl-1 "></i>
              </button>
              <ul className="bg-white mb-4  space-y-3 font font-sans  block text-gray-800 mx-5 left-[30%] top-28 absolute  border-black cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6  ">
                <li className="bg-white font-normal text-[#ff497c] ">
                  Home-Electronics
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Home-NFT
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Home-Fashion
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Home-Jewellery
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Home-Furniture
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Home-Multipurpose
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  RTL Version
                </li>
              </ul>
            </div>

            <div className="group flex">
              <button
                className=" relative font-bold mx-7 group hover:border-b-[3px] border-black"
                type="button"
              >
                <span className=" bottom-0 opacity-100 group-hover:opacity-100 duration-500">
                  {" "}
                </span>
                Shop<i class="fa-solid fa-angle-down text-gray-400 pl-1 "></i>
              </button>

              <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6 absolute  top-28 left-[37%] space-y-2">
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Shop With Sidebar
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Shop No Sidebar
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 1
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 2
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 3
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 4
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 5
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 6
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 7
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Product Variation 8
                </li>
              </ul>
            </div>

            <div className="group flex">
              <button
                className=" relative font-bold mx-7 hover:border-b-[3px] border-black"
                type="button"
              >
                Pages<i class="fa-solid fa-angle-down text-gray-400 pl-1 "></i>
              </button>
              <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-9 absolute  top-28 left-[44%] space-y-2">
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Whishlist
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Cart
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Checkout
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Account
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Sign Up
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Sign In
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Forgot Password
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Reset Password
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Privacy Policy
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Coming Soon
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  404 Error
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Typography
                </li>
              </ul>
            </div>

            <ul className="bg-transparent font-sans text-gray-800 mx-5 mt-2 cursor-pointer font-bold hover:border-b-[3px] border-black">
              About
            </ul>

            <div className="group flex">
              <button
                className=" relative font-bold mx-7 hover:border-b-[3px] border-black"
                type="button"
              >
                Blog<i class="fa-solid fa-angle-down text-gray-400 pl-1 "></i>
              </button>
              <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-10 absolute  top-28 left-[56%] space-y-2">
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Blog List
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Blog Grid
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Standard Post
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Gallary Post
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Video Post
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Audio Post
                </li>
                <li className="bg-white font-normal hover:text-[#ff497c] duration-300">
                  Quote Post
                </li>
              </ul>
            </div>

            <ul className="bg-transparent text-base font-bold font-sans text-gray-800 mx-7 mt-2 cursor-pointer hover:border-b-[3px] border-black">
              Contact
            </ul>
          </div>

          {/* icon-section */}

          <div className="Icon-section">
            <ul className="flex mt-2 cursor-pointer">
              <li className="">
                <i class="fa-solid fa-magnifying-glass mr-6"></i>
              </li>
              <li className="">
                <i class="fa-solid fa-heart mr-6"></i>
              </li>
              <li className="">
                <i class="fa-solid fa-cart-shopping mr-6"></i>
              </li>
              <li className="">
                <i class="fa-regular fa-user mr-6"></i>
              </li>
            </ul>
          </div>
        </div>

        {/* Hero-Section */}

        <div className="Hero-section  -top-52 h-[120vh] relative overflow-hidden px-10">
          <div className="Background-img">
            <img className="absolute right-80 -bottom-20" src={bgimg1} alt="" />
            <img className="absolute right-10 -bottom-12" src={bgimg2} alt="" />
          </div>

          <div className="BACKGROUND-DETAIL absolute top-96">
            <div className="flex mb-4">
              <i className="ri-fire-fill h-6 w-6 text-base bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
              <h1 className="text-[#FF497C] font-bold text-sm flex items-center ml-2">
                {" "}
                Hot Deal In This Week
              </h1>
            </div>
            <p className="font-bold text-6xl text-[#292930] tracking-wide leading-[75px] mb-10">
              Roco Wireless
              <br /> Headphone
            </p>

            <div className="flex items-center">
              <div className="BUTTON">
                <a
                  href="#"
                  className="px-9 py-5 z-10 bg-white font-bold rounded-md relative 
            before:absolute
            before:contetn-['']
            before:px-10
            before:py-5
             before:bg-white
            before:left-0
            before:top-0
            before:right-0
            before:bottom-0
            before:rounded-md
            before:-z-10
            before:hover:scale-110
            before:duration-300"
                >
                  <i class="ri-shopping-cart-line mr-2"></i> Shop Now
                </a>
              </div>

              <div className="flex ml-8">
                <div className="IMAGES-CIRCLE">
                  <ul className="flex">
                    <li className=" border-2 rounded-full ">
                      <img src={rimage1} alt="" />
                    </li>
                    <li className="-ml-5 border-2 rounded-full border-white">
                      <img src={rimage2} alt="" />
                    </li>
                    <li className="-ml-5 border-2 rounded-full border-white">
                      <img src={rimage3} alt="" />
                    </li>
                    <li className="-ml-5 border-2 rounded-full border-white">
                      <img src={rimage4} alt="" />
                    </li>
                  </ul>
                </div>
                <div className="STARS ml-5">
                  <span className="text-[#FFA800]">
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-fill"></i>
                    <i class="ri-star-s-line"></i>
                  </span>
                  <div>
                    <h1 className="text-xs font-bold">
                      100+{" "}
                      <span className="text-gray-600 text-xs font-semibold">
                        Reviews
                      </span>{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category-section */}

      <div className="Category-section px-32 mx-auto container">
        <div className=" my-[70px]">
          <div className="flex mb-3">
            <i className="ri-price-tag-3-line h-6 w-6 text-base border bg-[#FF497C] text-white rounded-full flex items-center justify-center"></i>
            <h1 className="text-[#FF497C] font-bold text-sm flex items-center ml-2">
              Categories
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-4xl text-[#292930] mb-[30px]">
              Browse by Category
            </h1>
            <div className="text-gray-400">
              <a href="#">
                <i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i>
              </a>
              <a href="#">
                <i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-x-10 mt-10">
            <a href="#">
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={phones} alt="" />
                </div>
                <p className="text-gray-800">Phones</p>
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={computers} alt="" />
                </div>
                <p className="text-gray-800">Computers</p>
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={accesories} alt="" />
                </div>
                <p className="text-gray-800">Accessories</p>
              </div>
            </a>
            <a href="">
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={laptops} alt="" />
                </div>
                <p className="text-gray-800">Laptops</p>
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px]  text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={monitors} alt="" />
                </div>
                <p className="text-gray-800">Monitors</p>
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={networking} alt="" />
                </div>
                <p className="text-gray-800">Networking</p>
              </div>
            </a>
            <a href="#">
              <div className="border border-gray-200 rounded-md py-[28px] px-[12px] text-center hover:shadow-2xl duration-500">
                <div className="flex justify-center">
                  <img className="mb-3" src={pcgaming} alt="" />
                </div>
                <p className="text-gray-800">PC Gaming</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Feedback-section */}

      <div className="Feed-back-section mx-auto container">
        <div className="bg-[#F9F3F0]  px-32 py-20">
          <div className="flex justify-between ">
            <div className="mb-10">
              <p className="text-[#FF497C] font-medium mb-2">
                <i class="ri-double-quotes-l bg-[#FF497C] p-1 text-white rounded-full text-center mr-3"></i>
                Testimonials
              </p>
              <h1 className="font-bold text-4xl text-[#292930]  tracking-wide">
                Users Feedback
              </h1>
            </div>
            <div className="text-gray-400">
              <a href="#">
                <i class="ri-arrow-left-line mr-2 bg-[#F6F7FB] p-4 rounded-md"></i>
              </a>
              <a href="#">
                <i class="ri-arrow-right-line bg-[#F6F7FB] p-4 rounded-md"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <div>
              <div className="bg-white p-12 text-gray-500 leading-7 rounded-lg">
                <p>
                  “ It’s amazing how much easier it has been to meet new people
                  and create instantly non connections. I have the exact same
                  personal the only thing that has changed is my mind set and a
                  few behaviors. “
                </p>
              </div>
              <div className="flex items-center mt-10">
                <img src={feed1} alt="" />
                <div className="ml-5">
                  <h1 className="text-gray-500">Head Of Idea</h1>
                  <h1 className="font-semibold text-lg text-[#292930] tracking-wide">
                    James C. Anderson
                  </h1>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="bg-white p-12 text-gray-500 leading-7 rounded-lg">
                <p>
                  “ It’s amazing how much easier it has been to meet new people
                  and create instantly non connections. I have the exact same
                  personal the only thing that has changed is my mind set and a
                  few behaviors. “
                </p>
              </div>
              <div className="flex items-center mt-10">
                <img src={feed2} alt="" />
                <div className="ml-5">
                  <h1 className="text-gray-500">Head Of Idea</h1>
                  <h1 className="font-semibold text-lg text-[#292930] tracking-wider">
                    James C. Anderson
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-12 text-gray-500 leading-7 rounded-lg">
                <p>
                  “ It’s amazing how much easier it has been to meet new people
                  and create instantly non connections. I have the exact same
                  personal the only thing that has changed is my mind set and a
                  few behaviors. “
                </p>
              </div>
              <div className="flex items-center mt-10">
                <img src={feed3} alt="" />
                <div className="ml-5">
                  <h1 className="text-gray-500">Head Of Idea</h1>
                  <h1 className="font-semibold text-lg text-[#292930] tracking-wider">
                    James C. Anderson
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trade - Strore */}

      <div className="Trade-Store container mx-auto px-32">
        <div className="border-b pb-20">
          <div className="mt-14">
            <div className="mb-12 text-center">
              <p className="text-[#8C71DB] font-medium mb-2">
                <i class="ri-shining-2-fill bg-[#8C71DB] p-1 text-white rounded-full text-center mr-3"></i>
                Most Sold
              </p>
              <h1 className="font-bold text-4xl text-[#292930] ">
                Most Sold in eTrade Store
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 32.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        100+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Media Remote
                  </h1>
                  <p className="text-xl font-bold">
                    $29.99{" "}
                    <span className="text-gray-300 ml-2">
                      <del>$49.99</del>
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 33.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        50+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    HD Camera
                  </h1>
                  <p className="text-xl font-bold">$49.99 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 34.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        120+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Gaming Controller
                  </h1>
                  <p className="text-xl font-bold">$50.00 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 35.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        30+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Wall Mountr
                  </h1>
                  <p className="text-xl font-bold">$19.00 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 36.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        700+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Lenevo Laptop
                  </h1>
                  <p className="text-xl font-bold">$999.99 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 37.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        300+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Juice Grinder Machine
                  </h1>
                  <p className="text-xl font-bold">$99.00 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 38.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        100+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Wireless Headphone
                  </h1>
                  <p className="text-xl font-bold">$59.99 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center outline outline-1 outline-gray-200 rounded-md p-7 group hover:shadow-lg hover:shadow-zinc-100 hover:duration-500 hover:outline-none duration-[0.3s]">
              <div className="flex items-center ">
                <div className="overflow-hidden rounded-md">
                  <img
                    className="rounded-md group-hover:scale-110 duration-500"
                    src="./src/assets/home/asset 39.png"
                    alt=""
                  />
                </div>
                <div className="pl-8 leading-7">
                  <div className="flex items-center">
                    <span className="text-[#FFA800]">
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-line"></i>
                    </span>
                    <div>
                      <h1 className="text-xs font-bold ml-2">
                        100+{" "}
                        <span className="text-gray-600 text-xs font-semibold">
                          Reviews
                        </span>{" "}
                      </h1>
                    </div>
                  </div>
                  <h1 className="text-gray-500 font-semibold mb-2 hover:text-[#3577F0] duration-700 cursor-pointer">
                    Asus Zenbook Laptop
                  </h1>
                  <p className="text-xl font-bold">$899.00 </p>
                </div>
              </div>
              <div>
                <a href="#" className="block mb-6">
                  <i class="ri-shopping-cart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
                <a href="#">
                  <i class="ri-heart-line  p-3 rounded-md border text-gray-600 hover:text-white hover:bg-[#3577F0] hover:border-none hover:duration-500"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service-section */}

      <div className="Service-section">
        <div className="flex justify-center mt-14">
          <i class="fa-solid fa-thumbs-up border bg-[#ff497c] rounded-full p-1 text-white"></i>
          <p className="font-sans text-[#ff497c] font-semibold text-sm mt-1 ml-2">
            Why Us
          </p>
        </div>

        <h1 className="font-semibold text-4xl  flex justify-center mt-3">
          Why People Choose Us
        </h1>
      </div>

      <div className="flex mt-14 justify-center">
        <div className="border-gray-200 border rounded-md  py-12 mx-6 w-52 h-54 hover:shadow-xl duration-300">
          <img className="px-16 mx-2 mb-4" src={delivery}></img>
          <p className="font-bold mt-4 text-center px-10 ">
            Fast & Secure Delivery
          </p>
        </div>

        <div className="border-gray-200 border rounded-md  py-12 mx-6  w-52 h-56 hover:shadow-xl duration-300">
          <img className="px-16 mx-2 mb-4" src={product}></img>
          <p className="font-bold mt-4 text-center px-8">
            100% Guarantee On Product
          </p>
        </div>

        <div className="border-gray-200 border rounded-md  py-12 mx-6 w-52 h-56 hover:shadow-xl duration-300">
          <img className="px-16 mx-2 mb-4" src={policy}></img>
          <p className="font-bold mt-4 text-center px-8">
            24 Hour Return Policy
          </p>
        </div>

        <div className="border-gray-200 border rounded-md py-12 mx-6 w-52 h-56 hover:shadow-xl duration-300">
          <img className="px-16 mx-2 mb-4" src={policyy}></img>
          <p className="font-bold mt-4 text-center px-8">
            24 Hour Return Policy
          </p>
        </div>

        <div className="border-gray-200 border rounded-md py-12  mx-5 w-52 h-56 hover:shadow-xl duration-300">
          <img className="px-16 mx-2 mb-4" src={quality}></img>
          <p className="font-bold mt-4 text-center px-8">
            Next Level Pro Quality
          </p>
        </div>
      </div>

      <div className="Offer-section">
        <div className="flex mt-20 justify-center mx-auto">
          <div className="relative w-[600px] overflow-hidden rounded-md  group mx-4">
            <img className="  hover:scale-110 duration-300" src={sound}></img>
            <h1 className=" top-[22%] right-[18%] text-white font-bold text-4xl absolute">
              Rich sound,
              <br />
              for less.
            </h1>
            <p className="absolute top-[67%] right-[37%] text-gray-500 group-hover:text-white">
              Collections
            </p>
          </div>

          <div className="relative w-[600px] overflow-hidden rounded-md  group mx-4">
            <img className=" hover:scale-110 duration-300" src={glass}></img>
            <p className="absolute text-gray-300 top-[25%] right-[68%] group-hover:text-white">
              50% Offer In Winter
            </p>
            <h1 className="absolute top-[40%] right-[56%] text-4xl font-bold text-white ">
              Get VR <br />
              Reality Glass
            </h1>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
