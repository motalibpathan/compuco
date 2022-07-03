import { Link } from "react-router-dom";

const WhatOurTeamSay = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b274efa09bb6_BG_Get%20in%20Touch.svg)",
      }}
      className="text-center "
    >
      <div className=" max-w-[1140px] mx-auto w-full md:py-16 p-5">
        <div className="md:flex md:mt-10 mt-5 text-center md:text-left">
          <div className="md:w-2/5 w-full p-5">
            <img
              className="w-20 md:mx-0 mx-auto"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fcabe26a5a473c3f612a4_team.svg"
              alt=""
            />
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 font-poppins mt-3">
              What
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold text-gray-900 font-poppins">
              our team says
            </h1>
          </div>
          <div className="md:w-3/5 w-full space-y-7 text-lg text-gray-700 font-work p-5">
            <p>
              Our talented and diverse team works together for one purpose—to
              unlock the potential of those around us.
            </p>
            <div className="md:flex gap-5">
              <img
                className="md:mx-0 mx-auto"
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fe32261ed8cec7745a002_stars.svg"
                alt=""
              />
              <p className="font-bold font-xl inline-block">
                4.4 Glassdoor Reviews
              </p>
            </div>
            <Link
              to="/contact-us"
              className="py-2 text-center bg-white px-5 rounded-lg inline-block border border-gray-600 hover:text-[#00d8aa] hover:border-[#00d8aa]"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatOurTeamSay;
