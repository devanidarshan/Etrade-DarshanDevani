import React from "react";
import logo from "../assets/Signup/asset 0.png";
import signup from "../assets/Signup/asset 1.jpeg";

export const Resetpassword = () => {
  return (
    <div className="RESSET-PASSWORD-SECTION flex h-screen">
      <div className="IMAGE-SECTION h-full w-[700px] relative">
        <span className="absolute ps-10 pt-10">
          <a href="">
            <img className="h-10 ml-16 mt-4 cursor-pointer" src={logo} alt="" />
          </a>
          <h1 className="text-4xl font-semibold mt-24 ml-16">
            We Offer the Best <br />
            Products
          </h1>
        </span>
        <img className="h-[900px] w-[500px] fixed overflow-hidden -z-10 object-cover" src={signup} alt=""></img>
      </div>

      <div className="FORM-SECTION w-full">
        <div className="flex justify-end mr-24 mt-10">
          <a className="">
            <i class="fa-solid fa-angle-left my-3 mr-[690px] border px-3 py-2.5 rounded-md border-gray-300 hover:bg-blue-500 duration-300 hover:text-white"></i>
          </a>
          <p className="mr-1 mt-5 text-sm font-semibold">Already a member?</p>
          <button className="cursor-pointer text-sm font-semibold" type="text">
            Sign In
          </button>
        </div>

        <div className="flex flex-col justify-center mt-28 ml-72">
          <h1 className=" font-semibold text-gray-800 text-3xl ">
            Reset Password
          </h1>

          <from action="">
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm font-semibold">
                New Password
              </label>
              <input
                class="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="......."
              ></input>
            </div>
            <div className="relative mt-5">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm font-semibold">
                Confirm Password
              </label>
              <input
                class="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="......."
              ></input>
            </div>
            <button className="border px-10 py-4 mt-8 rounded-md bg-blue-600 text-white font-semibold cursor-pointer">
              Reset Password
            </button>
          </from>
        </div>
      </div>
    </div>
  );
};
