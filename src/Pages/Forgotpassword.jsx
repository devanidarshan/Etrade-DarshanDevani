import React from "react";
import logo from "../assets/Signin/asset 0.png";
import signup from "../assets/Signup/asset 1.jpeg";

export const Forgotpassword = () => {
  return (
    <div className="FORGETPASSWORD-SECTION flex h-screen">
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
        <img
          className="h-[900px] w-[500px] overflow-hidden fixed -z-10 object-cover"
          src={signup}
          alt=""
        ></img>
      </div>

      <div className="FORM-SECTION w-full">
        <div className="flex justify-end mr-24 mt-10">
          <a className="">
            <i class="fa-solid fa-angle-left mt-5 mr-[570px] border px-3 py-2.5 rounded-md border-gray-300 hover:bg-blue-500 duration-300 hover:text-white"></i>
          </a>
          <p className="mr-7 mt-5 text-sm ">Already a member?</p>
          <button
            className="border bg-[#ff497c] px-10 py-4 rounded-lg text-white text-md cursor-pointer font-semibold"
            type="text"
          >
            Sign In
          </button>
        </div>

        <div className="flex flex-col justify-center mt-28 ml-72">
          <h1 className=" font-semibold text-gray-800 text-3xl ">
            Forgot Password?
          </h1>
          <form action="">
            <div className="text-gray-400 mt-5 text-sm ">
              Enter the email address you used when you joined and we’ll <br />
              send you instructions to reset your password.
            </div>
          </form>

          <from action="">
            <div className="relative mt-14">
              <label className="absolute top-[-5px] left-[20px] bg-[#fff] px-2 text-gray-600 text-sm">
                Email
              </label>
              <input
                className="w-96 h-16 border mt-2 rounded-lg px-6 text-gray-500 text-sm focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="annie@example.com"
              ></input>
            </div>
            <button className="border px-12 py-5 mt-8 rounded-md bg-blue-500 text-white font-semibold cursor-pointer">
              Send Reset Instructions
            </button>
          </from>
        </div>
      </div>
    </div>
  );
};
