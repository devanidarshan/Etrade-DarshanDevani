import React from 'react'
import logo from '../assets/Homepage/asset 0.png'

export const Navbar = () => {
  return (
    <div className='NAVBAR-SECTION bg-[#f8f8f8]'>
       <div className="bg-[#f8f8f8] h-20 px-10 rounded-md py-5 flex align-middle justify-around mx-auto container">
          <div className="LOGO">
           <a href='#'><img className="" src={logo}></img></a>
          </div>

          <div className="NAVBAR flex ">
            <div className="group flex">
              <button
                className=" relative font-bold mx-7 hover:border-b-[3px]  border-black "
                type="button"
              >
                Home<i class="fa-solid fa-angle-down text-gray-400 pl-1 "></i>
              </button>
              <ul className="bg-white mb-4  space-y-3 font font-sans  block text-gray-800 mx-5 left-[20%] top-[13%] absolute  border-black cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6  ">
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

              <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-6 absolute  top-[13%] left-[28%] space-y-2">
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
              <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-9 absolute  top-[13%] left-[36%] space-y-2">
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
              <ul className="bg-white font-bold font-sans text-gray-800  mx-3 cursor-pointer opacity-0 group-hover:opacity-100 duration-500 shadow-md rounded-lg p-10 absolute  top-[13%] left-[49%] space-y-2">
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
 
          {/* Search-section */}

          <div className='SEARCH-SECTION'>
            <ul className='border p-2 rounded-lg'>
                <li className=''>
                  <a href='#'><i class="fa-solid fa-magnifying-glass mr-3 text-gray-600"></i></a> 
                    <input className='focus:outline-none bg-transparent' type='search' placeholder='What are you looking for?'></input>
                    <button className='' type='submit'>
                    </button>
                </li>
            </ul>
          </div>
          
          {/* icon-section */}

          <div className="ICON-SECTION">
            <ul className="flex mt-2 cursor-pointer">
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
    </div>
  )
}

