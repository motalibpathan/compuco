import { useContext, useEffect } from "react";
import { ProgressContext } from "../../App";
import GetInTouch from "../Shared/GetInTouch";
import OurCoreValue from "./OurCoreValue";

const AboutUs = () => {
  const [, setProgress] = useContext(ProgressContext);
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <>
      <div className="md:mt-14 mt-5 max-w-[1140px] mx-auto w-full">
        <div className="w-full mx-auto md:flex justify-center items-center">
          <div className="w-full p-5">
            <h1 className="md:text-6xl text-4xl font-poppins font-bold leading-tight ">
              Changing the way{" "}
            </h1>
            <h1 className="md:text-6xl text-4xl  font-poppins font-bold leading-tight ">
              <span className="z-10 relative">you work for good</span>
              <img
                className="md:ml-[340px] ml-44 -mt-3 z-0 relative md:w-52 w-40 "
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                alt=""
              />
            </h1>
          </div>
          <div className="md:w-2/5 w-full p-5">
            <img
              className="w-full "
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171385b2a6fc0cf1270046c_About%20us%20illustration%20v2.svg"
              alt=""
            />
          </div>
        </div>
        <div className="md:-mb-32 md:-ml-10 ">
          <img
            className="md:w-64 w-32"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617139496a588a79af2738b8_Bg_Left.svg"
            alt=""
          />
        </div>
        <div className="md:w-4/5 w-full mx-auto md:flex md:items-start md:justify-center mt-10 md:ml-[200px] ">
          <img
            className="w-24 md:mr-7 mx-auto"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171394a662dc68826f39637_pic.png"
            alt=""
          />
          <div className="relative md:text-left text-center">
            <img
              className="absolute top-0 md:left-0 left-4 "
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559a17f14737b_%E2%80%9C.svg"
              alt=""
            />
            <p className="md:text-xl text-md mt-10  text-gray-600 font-work md:p-0 p-5 ">
              Our mission is to empower socially responsible organisations with
              the digital tools they need to build a better world.
            </p>
            <p className="mt-2 text-gray-700 text-xl font-work">
              Jamie Novick, CEO
            </p>
            <img
              className="absolute bottom-0 md:right-0 right-5"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559ea9b14737c_%E2%80%9D.svg"
              alt=""
            />
          </div>
        </div>
        <div className="md:w-3/5 w-full mx-auto md:flex justify-center items-start gap-10 mt-10 md:p-10 p-5">
          <img
            className="w-full md:my-0 my-5"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185431cb7cc63a0dc670f44_Mask%20Group-p-500.png"
            alt=""
          />
          <img
            className="w-full"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185431cac5381845d7dc246_Mask%20Group-1-p-800.png"
            alt=""
          />
        </div>
        <div className="md:flex md:mt-10 mt-5 text-center md:text-left">
          <div className="md:w-2/5 w-full p-5">
            <img
              className="w-20 md:mx-0 mx-auto"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61273eefadd54427380b2643_Icon_Get%20in%20touch.svg"
              alt=""
            />
            <h1 className="text-5xl font-bold text-gray-700">What we do</h1>
          </div>
          <div className="md:w-3/5 w-full space-y-7 text-lg text-gray-700 font-work p-5">
            <p>
              Founded in 1977 and with a heritage spanning over 40 years,
              Compuco exists to empower socially responsible organisations with
              the digital tools they need to build a better world.
            </p>
            <p>
              We are a boutique team of over 50 technology professionals who are
              passionate about the clients we work with and platforms we create.
              We do most of our work on the open source platforms Drupal and
              CiviCRM but we also like to work with other frameworks too.
            </p>
            <p>
              We deliver hand-crafted digital platforms which change the way you
              work, for good.
            </p>
          </div>
        </div>
      </div>
      <OurCoreValue />
      <GetInTouch />
    </>
  );
};

export default AboutUs;
