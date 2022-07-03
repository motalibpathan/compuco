import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import useProgress from "../../hooks/useProgress";
import Container from "../Shared/Container";
import GetInTouch from "../Shared/GetInTouch";
import OurCoreValue from "./OurCoreValue";

const AboutUs = () => {
  const aboutUsRef = useRef(null);
  useProgress(aboutUsRef);
  return (
    <>
      <Container>
        <div
          className="w-full mx-auto md:flex justify-center items-center md:overflow-visible overflow-hidden"
          ref={aboutUsRef}
        >
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <>
                <div
                  className={`w-full p-5 ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-24 opacity-0"
                  } duration-1000`}
                >
                  <h1 className="md:text-6xl text-3xl font-poppins font-bold leading-tight ">
                    Changing the way{" "}
                  </h1>
                  <h1 className="md:text-6xl text-3xl  font-poppins font-bold leading-tight ">
                    <span
                      style={{
                        backgroundImage:
                          "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "100% 100%",
                      }}
                      className="z-10 relative"
                    >
                      you work for good
                    </span>
                  </h1>
                </div>
                <div
                  className={`md:w-2/5 w-full p-5  ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "translate-x-24 opacity-0"
                  } duration-1000`}
                >
                  <img
                    className="w-full "
                    src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6171385b2a6fc0cf1270046c_About%20us%20illustration%20v2.svg"
                    alt=""
                  />
                </div>
              </>
            )}
          </ReactVisibilitySensor>
        </div>
        <div className="md:-mb-32 md:-ml-10 ">
          <img
            className="md:w-64 w-32"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617139496a588a79af2738b8_Bg_Left.svg"
            alt=""
          />
        </div>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div
              className={`md:w-4/5 w-full mx-auto md:flex md:items-start md:justify-center mt-10 md:ml-[200px] ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } duration-1000 `}
            >
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
                  Our mission is to empower socially responsible organisations
                  with the digital tools they need to build a better world.
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
          )}
        </ReactVisibilitySensor>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <div
              className={` md:w-3/5 w-full mx-auto md:flex justify-center items-start gap-10 mt-10 md:p-10 p-5 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } duration-1000`}
            >
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
          )}
        </ReactVisibilitySensor>
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
      </Container>
      <OurCoreValue />
      <GetInTouch />
    </>
  );
};

export default AboutUs;
