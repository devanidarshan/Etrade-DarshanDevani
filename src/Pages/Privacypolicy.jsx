import React from "react";
import alexa from "../assets/Privacypolicy/asset 2.png";
import { SubFooter } from "../Home/SubFooter";
import {Topnavbar} from "../Components/Topnavbar"
import {Navbar} from "../Components/Navbar"
import {Bgimg} from "../Components/Bgimg"

export const Privacypolicy = () => {
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

    <div className="Privacy-section">
      <div className="first-part flex bg-[#f8f8f8] justify-between p-12 ">
        <div className="mx-16">
          <p className="text-gray-400 font-semibold">
            Home | <span className="text-blue-500">Pages</span>
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mt-5">
            Privacy Policy
          </h1>
        </div>
        <div className="mx-16">
          <img className="" src={alexa}></img>
        </div>
      </div>

      <div className="Second-part flex mx-32">
        <div className="">
          <div className="mt-20">
            <h2 className="font-semibold text-2xl text-gray-800 border-b-4 border-blue-500 pb-5 w-[628px]">
              This Privacy policy was published on February 26th, 2022.
            </h2>
          </div>

          <div className="mt-20">
            <h1 className="font-semibold text-2xl text-gray-800">
              GDPR compliance
            </h1>
            <p className="text-gray-500 mt-6">
              Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet
              libero rhoncus tempor. Fusce tempor quam libero, varius congue
              magna tempus <br />
              vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus
              rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean
              convallis ligula orci, <br />
              ut congue nunc sodales ut. In ultrices elit malesuada velit
              ornare, eget dictum velit hendrerit. Praesent bibendum blandit
              lectus, eu congue <br />
              neque mollis in. Pellentesque metus diam, hendrerit in purus
              fringilla, accumsan bibendum sapien. Nunc non facilisis sem.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              About eTrade
            </h1>
            <p className="text-gray-500 mt-6">
              In dapibus, nibh sit amet pulvinar convallis, massa nunc tincidunt
              nunc, a pretium risus nulla ut dui. Ut ut condimentum tellus,
              dapibus volutpat
            </p>
            <p className="text-gray-500">
              est. Integer ullamcorper iaculis blandit. Pellentesque id tempus
              urna. Quisque luctus cursus imperdiet.
              <span className="text-blue-700"> hello@etrade.store</span>{" "}
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              When we collect personal data about you
            </h1>
            <ul className="ml-6 mt-4 leading-9 text-gray-500 marker:text-gray-300">
              <li className="list-disc">
                Email is a crucial channel in any marketing.
              </li>
              <li className="list-disc">Curious what to say? How to say it?</li>
              <li className="list-disc">
                Whether you’re kicking off a new campaign.
              </li>
              <li className="list-disc">
                Habitasse per feugiat aliquam luctus accumsan curae
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              Why we collect and use personal data
            </h1>
            <p className="text-gray-500 mt-5">
              Sed nec ex vitae justo molestie maximus. Sed ut neque sit amet
              libero rhoncus tempor. Fusce tempor quam libero, varius congue
              magna tempus <br />
              vitae. Donec a justo nec elit sagittis sagittis eu a ante. Vivamus
              rutrum elit odio. Donec gravida id ligula ut faucibus. Aenean
              convallis ligula orci, <br />
              ut congue nunc sodales ut. In ultrices elit malesuada velit
              ornare, eget dictum velit hendrerit. Praesent bibendum blandit
              lectus, eu congue <br />
              neque mollis in. Pellentesque metus diam, hendrerit in purus
              fringilla, accumsan bibendum sapien. Nunc non facilisis sem.
            </p>
            <ul className="ml-6 mt-4 leading-9 text-gray-500 marker:text-gray-300">
              <li className="list-disc">
                Nulla facilisi. Sed pulvinar nec purus eu sollicitudin. Quisque
                ut tempus quam, in cursus eros.
              </li>
              <li className="list-disc">
                Fusce malesuada luctus velit eu tempor. Pellentesque habitant
                morbi tristique senectus et netus et.
              </li>
              <li className="list-disc">
                Pellentesque ornare nulla est, non blandit sapien lacinia nec.
                Nulla ac velit id est mattis faucibus.
              </li>
              <li className="list-disc">
                Vestibulum nulla tortor, aliquam at porta in, hendrerit sed
                nibh.
              </li>
              <li className="list-disc">
                Aliquam lacus nisi, lobortis non diam eget, malesuada bibendum
                justo. Praesent fringilla sagittis ex, ac molestie ipsum
                ullamcorper a.
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              Type of personal data collected
            </h1>
            <p className="text-gray-500 mt-6">
              In ultrices elit malesuada velit ornare, eget dictum velit
              hendrerit. Praesent bibendum blandit lectus, eu congue neque
              mollis in. Pellentesque <br />
              metus diam, hendrerit in purus fringilla, accumsan bibendum
              sapien. Nunc non facilisis sem.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              Information we collect automatically
            </h1>
            <p className="text-gray-500 mt-6">
              Etiam vel mi vel neque mattis iaculis. Proin vitae consequat
              augue, vel porta tellus. Nullam tincidunt ac lorem eu lacinia.
              Praesent ac diam id odio <br />
              elementum efficitur. Suspendisse sit amet urna vitae neque tempor
              pellentesque. Aenean ut dapibus urna. Pellentesque neque nulla,
              interdum <br />
              vitae rhoncus at, pretium id arcu. Etiam sodales lectus at
              convallis vestibulum. Quisque non neque augue. Nullam condimentum
              nulla felis, nec <br />
              suscipit augue congue ac.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              The use of cookies and web beacons
            </h1>
            <p className="text-gray-500 mt-6">
              We may log information using "cookies." Cookies are small data
              files stored on your hard drive by a website. Cookies help us make
              our Site and <br />
              your visit better.
              <p className="text-gray-500 mt-5">
                We may log information using digital images called web beacons
                on our Site or in our emails.
              </p>
            </p>
            <p className="text-gray-500 mt-5">
              This information is used to make our Site work more efficiently,
              as well as to provide business and marketing information to the
              owners of the <br />
              Site, and to gather such personal data as browser type and
              operating system, referring page, path through site, domain of
              ISP, etc. for the <br />
              purposes of understanding how visitors use our Site. Cookies and
              similar technologies help us tailor our Site to your personal
              needs, as well as to <br />
              detect and prevent security threats and abuse. If used alone,
              cookies and web beacons do not personally identify you.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              How long we keep your data
            </h1>
            <p className="text-gray-500 mt-5">
              We store personal data for as long as we find it necessary to
              fulfill the purpose for which the personal data was collected,
              while also considering <br />
              our need to answer your queries or resolve possible problems. This
              helps us to comply with legal requirements under applicable laws,
              to attend <br />
              to any legal claims/complaints, and for safeguarding purposes.
            </p>
            <p className="text-gray-500 mt-5">
              This means that we may retain your personal data for a reasonable
              period after your last interaction with us. When the personal data
              that we <br />
              have collected is no longer required, we will delete it securely.
              We may process data for statistical purposes, but in such cases,
              data will be <br />
              anonymized.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              Your rights to your personal data
            </h1>
            <p className="text-gray-500 mt-6">
              We store personal data for as long as we find it necessary to
              fulfill the purpose for which the personal data was collected,
              while also considering <br />
              our need to answer your queries or resolve possible problems. This
              helps us to comply with legal requirements under applicable laws,
              to attend <br />
              to any legal claims/complaints, and for safeguarding purposes.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              Hotjar’s privacy policy
            </h1>
            <p className="text-gray-500 mt-6">
              Pellentesque vestibulum venenatis iaculis. Aliquam viverra sodales
              ultrices. Quisque sed purus id massa consequat consectetur eu vel
              lorem. <br />
              Maecenas lectus velit, cursus quis orci non, laoreet hendrerit mi.
              Nulla vitae ipsum fringilla, placerat metus eu, malesuada velit.
              Quisque viverra <br />
              risus ex. Aenean commodo vestibulum efficitur. Nullam ligula orci,
              aliquet sed luctus vel, luctus vel dui. Sed pulvinar, ipsum at
              mattis imperdiet, <br />
              diam augue tempor diam, sed porttitor odio elit ut ante. In
              posuere mi at mi pellentesque ornare sit amet gravida nisi.
              Praesent ac blandit odio. <br />
              Curabitur iaculis ante elit, et imperdiet leo mollis at.
            </p>
          </div>

          <div className="mt-10">
            <h1 className="font-semibold text-2xl text-gray-800">
              Changes to this Privacy Policy
            </h1>
            <p className="text-gray-500 mt-6">
              Integer eu ornare lectus, ornare ullamcorper tellus. Morbi in urna
              a justo dignissim luctus. Nam sagittis ante ut lorem feugiat, sed
              consectetur <br />
              ligula lacinia. Vestibulum quis mauris sed lectus pretium dictum
              sed vitae orci. Vestibulum facilisis facilisis mauris non maximus.
              Nam tristique <br />
              ipsum egestas, suscipit orci sit amet, rutrum ante. Proin in felis
              pellentesque, ullamcorper enim vel, molestie ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
    

    <div>
      <SubFooter/>
    </div>
    </>
  );
};
