import React from "react";
import { SubFooter } from "../Home/SubFooter";
import {Topnavbar} from "../Components/Topnavbar"
import {Navbar} from "../Components/Navbar"
import {Bgimg} from "../Components/Bgimg"

export const Typography = () => {
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

      <div className="TYPOGRAPHY-SECTION mx-auto container">
        <div className="FIRST-PART mt-20 ml-32">
          <div className="flex text-5xl font-semibold text-gray-800 mb-9">
            <h1 className="">h1 - A Visual Type Scale</h1>
            <h1 className="ml-[134px]">46px</h1>
          </div>

          <div className="flex text-4xl font-semibold text-gray-800 mb-9">
            <h1 className="">h2 - A Visual Type Scale</h1>
            <h1 className="ml-64">36px</h1>
          </div>

          <div className="flex text-3xl font-semibold text-gray-800 mb-9">
            <h1 className="">h3 - A Visual Type Scale</h1>
            <h1 className="ml-80">28px</h1>
          </div>

          <div className="flex text-2xl font-semibold text-gray-800 mb-9">
            <h1 className="">h4 - A Visual Type Scale</h1>
            <h1 className="ml-96">24px</h1>
          </div>

          <div className="flex text-xl font-semibold text-gray-800 mb-9">
            <h1 className="">h5 - A Visual Type Scale</h1>
            <h1 className="ml-[428px]">20px</h1>
          </div>

          <div className="flex text-lg font-medium text-gray-800 mb-9">
            <h1 className="">h6 - A Visual Type Scale</h1>
            <h1 className="ml-[453px]">18px</h1>
          </div>
        </div>

        <div className="SECOND-PART ml-32">
          <div className="text-gray-600 leading-7">
            <p className="">
              B1 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta minima, provident <br />
              quos amet non hic animi. Natus dolorum reprehenderit debitis
              voluptatem magnam <br />
              beatae itaque dicta vitae! Magni esse ex rem.
            </p>
          </div>
          <div className="mt-9 text-gray-500 text-sm leading-6">
            <p className="">
              B2 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta minima, provident quos amet <br />
              non hic animi. Natus dolorum reprehenderit debitis voluptatem
              magnam beatae itaque dicta <br />
              vitae! Magni esse ex rem.
            </p>
          </div>
          <div className="mt-9 text-gray-500 text-xs leading-5">
            <p className="">
              B3 - Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dicta minima, provident quos amet non hic animi. <br />
              Natus dolorum reprehenderit debitis voluptatem magnam beatae
              itaque dicta vitae! Magni esse ex rem.
            </p>
          </div>
        </div>
      </div>

      <div>
        <SubFooter />
      </div>
    </>
  );
};
