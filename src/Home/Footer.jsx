import React from "react";
import image from "../assets/Homepage/asset 65.jpeg";
import delivery from "../assets/Homepage/asset 47.png";
import guarantee from "../assets/Homepage/asset 48.png";
import policy from "../assets/Homepage/asset 49.png";
import support from "../assets/Homepage/asset 50.png";
import scaner from "../assets/Homepage/asset 51.png";
import applestore from "../assets/Homepage/asset 52.png";
import googlestore from "../assets/Homepage/asset 53.png";
import email from "../assets/Homepage/emailicon.png";
import call from "../assets/Homepage/callicon.png";
import facebook from "../assets/Homepage/facebookicon.png";
import instagram from "../assets/Homepage/instagramicon.png";
import twitter from "../assets/Homepage/twittericon.png";
import linkedin from "../assets/Homepage/linkedinicon.png";
// import call from '../assets/Homepage/callicon.png'
import copyright from "../assets/Homepage/copyrighticon.png";
import paypal from "../assets/Homepage/paypalicon.png";
import mastercard from "../assets/Homepage/mastercard.png";
import visa from "../assets/Homepage/visaicon.png";
import envelope from "../assets/Homepage/envelope.png";

export const Footer = () => {
  return (
    <div className=" Footer-Section image-section mr-12">
      <div className=" newsletter-section relative">
        <div className="image-section flex justify-center mt-8">
          <img className="rounded-md" src={image}></img>
          <div className="absolute flex left-[15%] mt-24">
            <img className="h-6 w-6 border-black rounded-full bg-blue-500 p-1" src={envelope}></img>
            <h1 className="text-blue-600 font-semibold ml-2 ">Newsletter</h1>
          </div>

            <h1 className="absolute mt-32 text-4xl font-bold left-[15%]">Get Weekly Update</h1>
            <input className="absolute mt-56 h-14 w-[400px] rounded-lg left-[15%] pl-14 text-black" placeholder="example@gmail.com" type="text"></input>
            <button className="absolute mt-56 mr-20 border border-black px-9 py-4 rounded-lg bg-gray-800 text-white text-md font-sans" type="submit">Subscribe</button>
              
        </div>
      </div>

      <div className="footer-section flex justify-around  border-b-2 w-10/12 mx-auto py-10">
        <div className="first-part flex ">
          <div className="">
            <img className="h-11 w-11 mt-1" src={delivery}></img>
          </div>
          <div className="ml-7">
            <h1 className="font-bold ">Fast & Secure Delivery</h1>
            <p className="text-gray-500">Tell about your service.</p>
          </div>
        </div>

        <div className="first-part flex mr-2">
          <div className="">
            <img className="h-11 w-11 mt-1" src={guarantee}></img>
          </div>
          <div className="ml-7 ">
            <h1 className="font-bold">Money Back Guarantee</h1>
            <p className="text-gray-500">Within 10 days.</p>
          </div>
        </div>

        <div className="first-part flex mr-5">
          <div className="">
            <img className="h-11 w-11 mt-1" src={policy}></img>
          </div>
          <div className="ml-7">
            <h1 className="font-bold">24 Hour Return Policy</h1>
            <p className="text-gray-500">No question ask.</p>
          </div>
        </div>

        <div className="first-part flex mr-20">
          <div className="">
            <img className="h-11 w-11 mt-1" src={support}></img>
          </div>
          <div className="ml-7">
            <h1 className="font-bold ">Pro Quality Support</h1>
            <p className="text-gray-500">24/7 Live support.</p>
          </div>
        </div>
      </div>

      <div className="second-part flex justify-around mt-9  mb-5 border-b-2 mx-auto w-10/12  ">
        <div className="mb-14">
          <h1 className="font-bold mb-5">Support</h1>
          <p className="text-gray-500">685 Market Street,</p>
          <p className="text-gray-500">Las Vegas, LA 95820,</p>
          <p className="text-gray-500">United States.</p>

          <div className="mt-5">
            <div className="flex">
              <img className="h-6 w-6 text-gray-500" src={email}></img>
              <p className="mb-3 text-gray-500 ml-2 hover:text-black cursor-pointer">
                example@domain.com
              </p>
            </div>

            <div className="flex">
              <img className="h-6 w-6 text-gray-500" src={call}></img>
              <p className="text-gray-500 ml-2 hover:text-black cursor-pointer">
                (+01)850-315-5862
              </p>
            </div>
          </div>
        </div>

        <div className="mr-40">
          <h1 className="font-bold mb-7">Account</h1>
          <p className="text-gray-500 py-1">My Account</p>
          <p className="text-gray-500 py-1">Login / Register</p>
          <p className="text-gray-500 py-1">Cart</p>
          <p className="text-gray-500 py-1">Wishlist</p>
          <p className="text-gray-500 py-1">Shop</p>
        </div>

        <div className="mr-28">
          <h1 className="font-bold mb-7 ">Quick Link</h1>
          <p className="text-gray-500 py-1">Privacy Policy</p>
          <p className="text-gray-500 py-1">Terms Of Use</p>
          <p className="text-gray-500 py-1">FAQ</p>
          <p className="text-gray-500 py-1">Contact</p>
          <p className="text-gray-500 py-1">Contact</p>
        </div>

        <div className="">
          <h1 className="font-bold mb-7 mr-52">Download App</h1>
          <p className="text-gray-500 mb-5">Save $3 With App & New User only</p>

          <div className="flex ">
            <div className="">
              <img className="" src={scaner}></img>
            </div>

            <div className=" ">
              <img className="mb-2 ml-5 cursor-pointer" src={applestore}></img>

              <div className="">
                <img
                  className="mt-3 ml-5 cursor-pointer"
                  src={googlestore}
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Third-part flex ml-36 mb-4">
        <div className="flex mt-3 cursor-pointer">
          <div className="">
            <img className="h-4 w-4 mr-5" src={facebook}></img>
          </div>
          <div className="">
            <img className="h-4 w-4 mr-5" src={instagram}></img>
          </div>
          <div className="">
            <img className="h-4 w-4 mr-5" src={twitter}></img>
          </div>
          <div className=""> 
            <img className="h-4 w-4 mr-5" src={linkedin}></img>
          </div>
          {/* <div className=''>
            <img className='' src={message}></img>
        </div> */}
        </div>

        <div className="">
          <div className="flex ml-80 mt-3">
            <img className="h-3 w-3 mt-1 mr-1" src={copyright}></img>
            <p className="text-gray-500 text-sm">
              2023. All rights reserved by Axilthemes.
            </p>
          </div>
        </div>

        <div className="flex ml-72">
          <div className="">
            <p className="text-gray-500 mr-7 mt-2 text-sm">Accept for</p>
          </div>
          <div className="">
            <img className="h-5 w-6 mr-7 mt-3" src={paypal}></img>
          </div>
          <div className="">
            <img className="h-6 w-9 mr-7 mt-2" src={mastercard}></img>
          </div>
          <div className="">
            <img className="h-10 w-10 mr-7 " src={visa}></img>
          </div>
        </div>
      </div>
    </div>
  );
};