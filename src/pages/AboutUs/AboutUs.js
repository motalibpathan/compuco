import { useContext, useEffect } from "react";
import { ProgressContext } from "../../App";

const AboutUs = () => {
  const [, setProgress] = useContext(ProgressContext);
  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="mt-14 max-w-[1140px] mx-auto w-full">
      <div className="w-4/5 mx-auto flex justify-center items-center">
        <div className=" w-full">
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
        </div>
        <div className="w-2/5">
          <img
            className="w-full"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171385b2a6fc0cf1270046c_About%20us%20illustration%20v2.svg"
            alt=""
          />
        </div>
      </div>
      <div className="-mb-32 -ml-10">
        <img
          className="w-64"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617139496a588a79af2738b8_Bg_Left.svg"
          alt=""
        />
      </div>
      <div className="w-4/5 mx-auto flex items-start justify-center mt-10 ml-[200px]">
        <img
          className="w-24 mr-7"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171394a662dc68826f39637_pic.png"
          alt=""
        />
        <div className="relative ">
          <img
            className="absolute top-0 md:left-0 left-4 "
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138788897a559a17f14737b_%E2%80%9C.svg"
            alt=""
          />
          <p className="md:text-xl text-md mt-10 text-left text-gray-600 font-work md:p-0 p-5">
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
    </div>
  );
};

export default AboutUs;
