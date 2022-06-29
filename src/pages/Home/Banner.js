import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
const Banner = () => {
  const [visible, setVisible] = useState(false);
  const button = (
    <div className="w-full flex md:flex-row flex-col gap-y-3 mt-10 items-center">
      <button className="px-12 py-3 bg-gradient-to-r from-[#00fff7] to-[#25ffd0] rounded-lg mr-5">
        Portfolio
      </button>
      <button className="px-12 py-3 border border-black hover:border-[#0bdaad] hover:text-[#0bdaad] rounded-lg mr-5">
        Lets Talk
      </button>
    </div>
  );

  return (
    <div className="md:w-[1140px] mx-auto w-full">
      <div className="md:flex justify-center items-center md:py-10 py-2 md:my-10 my-0 px-5 md:overflow-visible overflow-hidden">
        <div className="md:w-3/5 w-full">
          <h1 className="md:text-6xl text-4xl font-poppins font-bold leading-tight ">
            Changing the way{" "}
          </h1>
          <h1 className="md:text-6xl text-4xl  font-poppins font-bold leading-tight ">
            <span className="z-10 relative">you work for good</span>
            <img
              className="md:ml-[340px] ml-44 -mt-3 z-0 relative md:w-52 w-40"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
              alt=""
            />
          </h1>
          <div className="md:block hidden">{button}</div>
        </div>
        <ReactVisibilitySensor
          partialVisibility
          onChange={(v) => setVisible(v)}
        >
          <div
            className={`md:w-2/5 relative w-full ${
              visible ? "opacity-100 translate-x-0" : "translate-x-32 opacity-0"
            } duration-1000 `}
          >
            <img
              className="w-full md:mt-0 mt-5"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/616ebd1c919837d37ac97de8_Illustration.svg"
              alt=""
            />
            <img
              className="absolute -bottom-24 right-0 md:w-52 w-24"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/62331a8e5b10716d0f6bbb2d_bg-blobs.svg"
              alt=""
            />
          </div>
        </ReactVisibilitySensor>
      </div>
      <div className="md:hidden mt-20">{button}</div>
      <div className="flex justify-center md:mt-0 mt-5 -ml-5 md:-ml-0">
        <img
          className=""
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61711b068b202c5ce44b8046_arrow-down-solid.svg"
          alt=""
        />
      </div>
      <div className={`md:mt-14 mt-5 flex justify-center relative `}>
        <img
          className="absolute bottom-20 left-0 md:block "
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/616ebedf65e7692a9d8e593d_emblem.svg"
          alt=""
        />
        <div
          className={`md:w-4/5 w-full ${
            visible ? "opacity-100 translate-y-0" : "translate-y-32 opacity-0"
          } duration-1000`}
        >
          <h1 className="md:text-5xl text-3xl font-bold text-center font-poppins">
            What we do
          </h1>
          <div className="relative ">
            <img
              className="absolute top-0 md:left-0 left-4 "
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559a17f14737b_%E2%80%9C.svg"
              alt=""
            />
            <p className="md:text-xl text-md mt-10 text-center text-gray-600 font-work md:p-0 p-5">
              Our team deliver handcrafted digital solutions that help
              nonprofit, <br />
              educational and membership organisations build a better world.
            </p>
            <img
              className="absolute bottom-0 md:right-0 right-5"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559ea9b14737c_%E2%80%9D.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`w-full ${
          visible ? "opacity-100 translate-y-0" : "translate-y-24 opacity-0"
        } duration-1000`}
      >
        <div className="flex justify-center mt-10">
          <img
            className="w-16 "
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171394a662dc68826f39637_pic.png"
            alt=""
          />
        </div>
        <p className="text-center mt-2 text-gray-600 font-work">
          Jamie Novick, CEO
        </p>
      </div>
    </div>
  );
};

export default Banner;
