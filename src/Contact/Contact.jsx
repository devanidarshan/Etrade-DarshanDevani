import React from "react";
import alexa from "../assets/Privacypolicy/asset 2.png";
import {Topnavbar} from '../Components/Topnavbar'
import {Navbar} from '../Components/Navbar'
import {Footer} from '../Home/Footer'

export const Contact = () => {
  return (
    <>
      <div>

      <div>
        <Topnavbar/>
      </div>

      <div>
        <Navbar/>
      </div>

        <section className="Contact-section">
        <div className="first-part flex bg-[#f8f8f8] justify-between p-12">
          <div className="mx-16">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">Contact</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              Contact With Us
            </h1>
          </div>
          <div className="mx-16">
            <img className="" src={alexa}></img>
          </div>
        </div>

          <div className="Form-section flex my-[80px] ml-32">
            <div>
              <h1 className="text-3xl font-semibold text-[#292930]">
                We would love to hear from you.
              </h1>
              <p className="text-gray-500 mt-4">
                If you’ve got great products your making or looking to work with
                us then drop us a line.
              </p>

              <div>
                <div className="flex mt-10">
                  <div className="relative text-gray-500 mr-6">
                    <label className="absolute -top-3 left-7 bg-white px-2 font-semibold text-sm">
                      Name<span className="text-[#E76458] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300  px-11 py-5 rounded-md font-normal focus:border-blue-600 outline-none ring-0    "
                    />
                  </div>
                  <div className="relative text-gray-500 mr-6">
                    <label className="absolute -top-3 left-7 bg-white px-2 font-semibold text-sm">
                      Phone<span className="text-[#E76458] ml-1">*</span>
                    </label>
                    <input
                      type="number"
                      className="border border-gray-300  px-11 py-5 rounded-md font-normal focus:border-blue-600 outline-none ring-0"
                    />
                  </div>
                  <div className="relative text-gray-500">
                    <label className="absolute -top-3 left-7 bg-white px-2 font-semibold text-sm">
                      E-mail<span className="text-[#E76458] ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      className="border border-gray-300  px-12 py-5 rounded-md font-normal focus:border-blue-600 outline-none ring-0"
                    />
                  </div>
                </div>

                <div className="relative text-gray-500 mt-8">
                  <label className="absolute -top-3 left-7 bg-white px-2 font-semibold text-sm">
                    Your Message
                  </label>
                  <textarea
                    className="resize-none border border-gray-300 rounded-md font-normal focus:border-blue-600 
                                    outline-none ring-0 py-5"
                    cols="101"
                    rows="5"
                  ></textarea>
                </div>

                <div className="mt-10">
                  <a
                    href="#"
                    className=" relative px-12 py-5  rounded-md font-semibold  text-white bg-[#3577F0] 
                                 before:absolute 
                                 before:content-[''] 
                                 before:w-[200px] 
                                 before:rounded-md 
                                 before:left-0 
                                 before:right-0 
                                 before:top-0 
                                 before:bottom-0 
                                 before:bg-[#3577F0]  
                                 before:-z-10 
                                 before:hover:scale-110  
                                 before:duration-300
                                "
                  >
                    Send Message
                  </a>
                </div>
              </div>
            </div>

            <div className="ml-7 text-gray-500">
              <div>
                <h1 className="text-2xl font-semibold text-[#292930] mb-5">
                  Our Store
                </h1>
                <p className="mb-5 leading-8">
                  8212 E. Glen Creek Street Orchard Park, NY 14127, United{" "}
                  <br />
                  States of America
                </p>
                <p>Phone: +123 456 7890</p>
                <p className="mb-10 leading-8">Email: Hello@etrade.com</p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-[#292930] mb-5">
                  Careers
                </h1>
                <p className="mb-10">
                  Instead of buying six things, one that you really like.
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-[#292930] mb-5">
                  Opening Hours:
                </h1>
                <p>Monday to Saturday: 9am - 10pm</p>
                <p className="leading-8">Sundays: 10am - 6pm</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div>
        <Footer/>
      </div>
    </>
    );
};
