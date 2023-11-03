import React from "react";
import image from "../assets/Bloglist/asset 36.png";
import alexa from "../assets/Bloglist/asset 2.png";
import rimage1 from "../assets/Bloglist/asset 3.png";
import uda from "../assets/Bloglist/asset 4.png";
import rimage2 from "../assets/Bloglist/asset 5.png";
import shoes from "../assets/Bloglist/asset 7.png";
import rimage3 from "../assets/Bloglist/asset 8.png";
import image1 from "../assets/Bloglist/asset 9.png";
import image2 from "../assets/Bloglist/asset 10.png";
import image3 from "../assets/Bloglist/asset 11.png";
import image4 from "../assets/Bloglist/asset 12.jpeg";
import image5 from "../assets/Bloglist/asset 13.jpeg";
import image6 from "../assets/Bloglist/asset 14.jpeg";
import { Footer } from "../Home/Footer";
import { Topnavbar } from "../Components/Topnavbar";
import { Navbar } from "../Components/Navbar";
import {Bgimg} from "../Components/Bgimg"

export const Bloglist = () => {
  return (
    <>
      <div>
        <Topnavbar />
      </div>

      <div>
        <Navbar />
      </div>

      <div>
        <Bgimg/>
      </div>

      <div className=" Blog-list-section">
        <div className="first-part flex bg-[#f8f8f8] justify-between p-12">
          <div className="mx-16">
            <p className="text-gray-400 font-semibold">
              Home | <span className="text-blue-500">Blogs</span>
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mt-5">Blog List</h1>
          </div>
          <div className="mx-16">
            <img className="" src={alexa}></img>
          </div>
        </div>

        <div className="main-section flex">
          <div className="Left-section">
              <div className="Dubai-section bg-[#f9f3f0] h-[400px] w-[850px] mt-20 rounded-lg ml-32 border-l-4 border-red-200 p-14">
                <a
                  href="#"
                  className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
                >
                  Dubai’s Offers its Take Nike SB Dunk.
                </a>
                <div className="main-section flex mt-8 ">
                  <div className="image">
                    <img className="h-12 w-12" src={rimage1}></img>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Ralph Edwards
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-1">
                      <li className="">Mar 27, 2022 |</li>
                      <li className="ml-2">9 min to read</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-500 mt-6 leading-7">
                  Donec metus lorem, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hendrerit nisi. <br />
                  Vestibulum eget risus velit. Aliquam tristique libero at dui
                  sodales, et placerat orci lobortis. <br />
                  Maecenas ipsum neque, elementum id dignissim et, imperdiet
                  vitae mauris.
                </p>
                <a href="#" className="">
                  <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 hover:scale-110 duration-300">
                    Read More
                  </button>
                </a>
              </div>
            

            <div className="image ml-32 border-t-2 mt-20 border-gray-100">
              <img className="rounded-lg mt-20" src={uda}></img>
            </div>

            <div className="ml-32 mt-8 border-b-2 border-gray-100">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and
                Jordan <br />
                Brand
              </a>
              <div className="main-section flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Theresa Underwood
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 25, 2022 |</li>
                    <li className="ml-2">300k views</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. <br />
                Vestibulum eget risus velit. Aliquam tristique libero at dui
                sodales, et placerat orci lobortis. <br />
                Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
                mauris.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 mb-14 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="bg-[#f9f3f0] h-[250px] w-[850px] mt-16 rounded-lg ml-32 border-l-4 border-red-200 p-10">
              <a
                href="#"
                className="text-4xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                “An oral history of the AIM away message <br />
                (by the people who were there)”
              </a>
              <div className="main-section flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Theresa Underwood
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 22, 2022 |</li>
                    <li className="ml-2">300k Views</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="Video-section"></div>

            <div className="rounded-lg ml-32 mt-8">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and
                Jordan <br />
                Brand
              </a>
              <div className="main-section flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage2}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Theresa Underwood
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 25, 2022 |</li>
                    <li className="ml-2">300k views</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
                lorem. In vel hendrerit nisi. <br />
                Vestibulum eget risus velit. Aliquam tristique libero at dui
                sodales, et placerat orci lobortis. <br />
                Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae
                mauris.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 mb-16 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="image-section ml-32 border-t-2 border-gray-100">
              <a href="#" className="">
                <img className="rounded-lg mt-16" src={shoes}></img>
              </a>
            </div>

            <div className="rounded-lg ml-32 mt-8">
              <a
                href="#"
                className="text-2xl font-semibold text-gray-800 hover:text-blue-600 duration-300"
              >
                UCLA Athletics Reaches Multi-Year Agreement with NIKE, Inc. and
                Jordan <br />
                Brand
              </a>
              <div className="main-section flex mt-8">
                <div className="image">
                  <img className="h-12 w-12 rounded-full" src={rimage3}></img>
                </div>
                <div className="image-content ml-4">
                  <a
                    href=""
                    className="font-semibold hover:text-blue-600 duration-300"
                  >
                    Leslie Alexander
                  </a>
                  <ul className="flex text-gray-500 text-sm mt-1">
                    <li className="">Mar 15, 2022 |</li>
                    <li className="ml-2">300k views</li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-500 mt-6 leading-7">
                The Converse x AMBUSH® CTAS Duck Boot and Chuck 70 Fuzzy release
                November 21 in Greater China. A global <br />
                release follows November 24.
              </p>
              <a href="#" className="">
                <button className="border rounded-lg bg-blue-500 text-white font-semibold px-10 py-4 mt-7 hover:scale-110 duration-300">
                  Read More
                </button>
              </a>
            </div>

            <div className="button-section">
              <div className="ml-32 my-20">
                <ul className="flex">
                  <li className="border px-4 py-2 mr-3 rounded-lg bg-blue-500 text-white text-lg">
                    1
                  </li>

                  <a href="#">
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      2
                    </li>
                  </a>

                  <a href="#">
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      3
                    </li>
                  </a>

                  <a href="#">
                    {" "}
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      4
                    </li>
                  </a>

                  <a href="#">
                    {" "}
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-lg">
                      5
                    </li>
                  </a>

                  <a href="#">
                    {" "}
                    <li className="border px-4 py-2 mr-3 rounded-lg hover:text-white hover:bg-blue-500 duration-300 text-md">
                      <i class="fa-solid fa-arrow-right"></i>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>

          <div className="Right-section ml-8">
            <div className=" image-section border p-8 mt-20 rounded-lg">
              <div className="rounded-lg">
                <h1 className="text-lg font-semibold">Latest Posts</h1>
                <div className="main-section flex mt-8 border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      {" "}
                      <img 
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image1}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Dubai’s FRAME Offers its <br />
                      Take on the
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2 mb-7">
                      <li className="">Mar 27, 2022 |</li>
                      <li className="ml-2">300k views</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg  mt-6">
                <div className="main-section flex border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      {" "}
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image2}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Apple presents App Best <br />
                      of 2020 winners
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2 mb-7">
                      <li className="">Mar 20, 2022 |</li>
                      <li className="ml-2">300k views</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg  mt-6">
                <div className="main-section flex">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image3}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Gallaudet University <br />
                      innovation in education
                    </a>
                    <ul className="flex text-gray-500 text-sm mt-2 ">
                      <li className="">Mar 15, 2022 |</li>
                      <li className="ml-2">300k views</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className=" product-section border p-8 mt-10 rounded-lg">
              <div className="rounded-lg">
                <h1 className="text-lg font-semibold">
                  Recent Viewed Products
                </h1>
                <div className="main-section flex mt-8 border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      {" "}
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image4}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Men's Fashion Tshirt
                    </a>
                    <ul className="flex text-sm mt-2 mb-11">
                      <li className="text-lg text-gray-300">
                        <del>$30</del>
                      </li>
                      <li className="ml-2 font-semibold text-lg">
                        $20
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg mt-6">
                <div className="main-section flex  border-b-2 border-gray-100">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image5}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Nike Shoes
                    </a>
                    <ul className="flex text-sm mt-2 mb-11">
                      <li className="text-lg text-gray-300">
                        <del>$200</del>
                      </li>
                      <li className="ml-2 font-semibold text-lg">
                        $150
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="rounded-lg mt-6">
                <div className="main-section flex">
                  <div className="image overflow-hidden rounded-lg">
                    <a href="#">
                      <img
                        className="rounded-lg h-20 w-32 hover:scale-110 duration-300"
                        src={image6}
                      ></img>
                    </a>
                  </div>
                  <div className="image-content ml-4">
                    <a
                      href=""
                      className="font-semibold hover:text-blue-600 duration-300"
                    >
                      Addidas Shoes
                    </a>
                    <ul className="flex text-sm mt-2">
                      <li className="text-lg text-gray-300">
                        <del>300</del>$
                      </li>
                      <li className="ml-2 font-semibold text-lg">
                        $200
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="Search-section border rounded-lg mt-10 p-7">
              <h1 className="text-lg text-gray-700 font-semibold mb-7">
                Search
              </h1>
              <form className="relative">
                <button className="absolute">
                  <i class="fa-solid fa-magnifying-glass mt-4 ml-5 text-gray-400 border focus:border-blue-400 ring-0"></i>
                </button>
                <input
                  className=" h-12 w-[320px] border rounded-lg pl-14 bg-gray-100"
                  placeholder="Search"
                  type="text"
                ></input>
              </form>
            </div>

            <div className="Archieves-section border rounded-lg mt-10 p-7">
              <h1 className="text-lg text-gray-700 font-semibold mb-5">
                Archives List
              </h1>
              <ul className="list-disc marker:text-gray-300 leading-8 ">
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#" className="">
                    January 2020
                  </a>
                </li>
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#">February 2020</a>
                </li>
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#">March 2020</a>
                </li>
                <li className="ml-4 text-gray-500 hover:text-gray-800 duration-300 marker:hover:text-blue-600 marker:duration-300">
                  <a href="#">April 2020</a>
                </li>
              </ul>
            </div>

            <div className="relative mt-10 border rounded-lg p-7">
              <h1 className="text-lg text-gray-700 font-semibold mb-5">
                Archives Dropdown
              </h1>
              <select
                className="w-[100%]  h-12 bg-white border mt-2 rounded-lg px-6  text-gray-500 text-sm focus:border-blue-500 ring-0 cursor-pointer"
                type="text"
              >
                <option value="">Select Month</option>
                <option value="">England</option>
                <option value="">New Zealand</option>
                <option value="">Switerland</option>
                <option value="">United kindom (UK)</option>
                <option value="">United States (USA)</option>
              </select>
            </div>

            <div className="Tags-section border rounded-lg p-7 mt-10">
              <h1 className="mb-8 text-lg text-gray-700 font-semibold">Tags</h1>
              <div className="flex">
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  Design
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  HTML
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  Graphic
                </a>
              </div>
              <div className="flex mt-3">
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  Development
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  UI/UX Design
                </a>
              </div>
              <div className="flex mt-3">
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300    px-4 py-2 rounded-full mr-3"
                >
                  eCommerce
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  CSS
                </a>
                <a
                  href="#"
                  className="border border-gray-300 text-gray-400 hover:bg-blue-500 hover:text-white duration-300 px-4 py-2 rounded-full mr-3"
                >
                  JS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
