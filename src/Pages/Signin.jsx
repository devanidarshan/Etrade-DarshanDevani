import React from "react";
import logo from "../assets/Signin/asset 0.png";
import signin from "../assets/Signin/asset 1.jpeg";

export const Signin = () => {
  return (
    <div className="SIGN-IN-SECTION flex h-screen">
      <div className="IMAGE-SECTION h-full w-[700px] relative">
        <span className="absolute ps-10 pt-10">
          <a href="">
            <img className="h-10 ml-16 mt-4 cursor-pointer" src={logo} alt="" />
          </a>
          <h1 className="text-3xl text-gray-900 font-semibold mt-24 ml-16">
            We Offer the Best <br />
            Products
          </h1>
        </span>
        <img className="h-[900px] w-[500px] overflow-hidden fixed -z-10 object-cover" src={signin} alt=""></img>
      </div>

      <div className="FORM-SECTION w-full">
        <div className="flex justify-end mr-24 mt-10">
          <p className="mr-7 mt-5 text-sm font-semibold">Not a member?</p>
          <button
            className="border bg-[#ff497c] px-9 py-4 rounded-lg text-white text-md cursor-pointer font-semibold"
            type="text"
          >
            Sign Up Now
          </button>
        </div>

        <div className="flex flex-col justify-center mt-28 ml-72">
          <h1 className=" font-semibold text-gray-800 text-3xl ">
            Sign in to eTrade
          </h1>
          <form action="">
            <div className="text-gray-400 mt-4 text-sm ">
              Enter your details below
            </div>
          </form>

          <from action="">
            <div className="relative mt-12">
              <label className="absolute top-[-3px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Email
              </label>
              <input
                className="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="annie@example.com"
              ></input>
            </div>
            <div className="relative mt-7">
              <label className="absolute top-[-3px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Password
              </label>
              <input
                class="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="......."
              ></input>
            </div>

            <div className="flex">
              <button className="border px-10 py-4 mt-8 rounded-md bg-blue-600 text-white font-semibold cursor-pointer">
                Sign In
              </button>
              <p className="text-blue-600 mt-12 ml-32 text-sm hover:text-gray-500 cursor-pointer">Forget Password?</p>
            </div>
          </from>
        </div>
        <div></div>
      </div>
    </div>
  );
};
