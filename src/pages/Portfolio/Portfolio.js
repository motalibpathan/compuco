import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import useProgress from "../../hooks/useProgress";
import RecentWork from "../Home/RecentWork";
import GetInTouch from "../Shared/GetInTouch";
import ByIndustry from "./ByIndustry";

const Portfolio = () => {
  const portfolioRef = useRef(null);
  useProgress(portfolioRef);
  return (
    <div ref={portfolioRef}>
      <div className="md:w-[1140px] mx-auto w-full">
        <div className="md:flex justify-center items-center md:py-10 py-2 md:my-10 my-0 px-5 md:overflow-visible overflow-hidden">
          <div className="md:w-1/2 w-full">
            <h1 className="md:text-7xl text-4xl font-poppins font-bold leading-tight ">
              We've worked with some
            </h1>
            <h1 className="md:text-6xl text-4xl  font-poppins font-bold leading-tight ">
              <span
                style={{
                  backgroundImage:
                    "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg)",
                  backgroundPosition: "0% 100%",
                }}
                className="z-[0] relative bg-no-repeat"
              >
                amazing{" "}
              </span>
              people
            </h1>
          </div>
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <div
                className={`md:w-1/2 relative w-full ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "translate-x-32 opacity-0"
                } duration-1000 `}
              >
                <img
                  className="w-full md:mt-0 mt-5"
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6176a72829b7b27c1feed3c1_Illustration_Portfolio.svg"
                  alt=""
                />
                <img
                  className="absolute -bottom-24 right-0 md:w-52 w-24"
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/62331a8e5b10716d0f6bbb2d_bg-blobs.svg"
                  alt=""
                />
              </div>
            )}
          </ReactVisibilitySensor>
        </div>
        <div className="flex justify-center md:mt-0 mt-5 -ml-5 md:-ml-0">
          <img
            className=""
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61711b068b202c5ce44b8046_arrow-down-solid.svg"
            alt=""
          />
        </div>
        <RecentWork show={5} />
      </div>
      <ByIndustry />
      <GetInTouch />
    </div>
  );
};

export default Portfolio;
