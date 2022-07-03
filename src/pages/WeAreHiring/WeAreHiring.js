import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import useProgress from "../../hooks/useProgress";
import Container from "../Shared/Container";
import JoinOurTeam from "./JoinOurTeam";
import WhatOurTeamSay from "./WhatOurTeamSay";
import WorkPlaceBenefit from "./WorkPlaceBenefit";

const WeAreHiring = () => {
  const weAreHiringRef = useRef(null);
  useProgress(weAreHiringRef);

  return (
    <div ref={weAreHiringRef}>
      <Container>
        <div className="w-full mx-auto md:flex justify-center items-center md:overflow-visible overflow-hidden">
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
                    Empower non-profit organisations
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
                      globally
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
                  <img
                    className="absolute -bottom-24 right-0 md:w-52 w-24"
                    src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/62331a8e5b10716d0f6bbb2d_bg-blobs.svg"
                    alt=""
                  />
                </div>
              </>
            )}
          </ReactVisibilitySensor>
        </div>
        <div className="md:flex mt-28 gap-14">
          <div className="md:w-1/2 w-full ">
            <h1 className="md:text-left text-center font-poppins text-3xl font-bold mb-5 text-gray-700 leading-10">
              Join a{" "}
              <span
                style={{
                  backgroundImage:
                    "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "100% 110%",
                  backgroundSize: "100%",
                }}
              >
                global team{" "}
              </span>
              transforming nonprofit organisations worldwide
            </h1>
            <p className="md:text-left text-center text-lg font-work text-gray-500">
              At Compuco we empower socially responsible organisations with the
              digital tools they need to build a better world. We work with
              Charities across their digital stack helping them to rebuild their
              processes using flexible open source platforms. We help
              organisations reimagine the way they work so they can focus on
              impact.
            </p>
          </div>
          <div className="md:w-1/2 w-full ">
            <img
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fd7d9cf4e7b56d4c5f7ef_Allura%20Feedback%20Session-p-500.png"
              alt=""
            />
          </div>
        </div>
      </Container>
      <JoinOurTeam />
      <div className="bg-[#f2fdfb] py-10">
        <Container>
          <div>
            <img
              className="w-20 mx-auto"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617278ba98a543166e30b681_emblem_2.png"
              alt=""
            />
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <>
                  <h1
                    className={`text-4xl font-poppins font-bold text-poppins text-center my-10 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-24 opacity-0"
                    } duration-1000`}
                  >
                    Our Community
                  </h1>
                </>
              )}
            </ReactVisibilitySensor>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 bg-white rounded-lg py-8">
            <div className="p-5 text-center md:border-r-2">
              <h1 className="text-3xl font-poppins font-bold text-[#00d8aa]">
                40+
              </h1>
              <p className="text-xl">Team Member</p>
            </div>
            <div className="p-5 text-center md:border-r-2">
              <h1 className="text-3xl font-poppins font-bold text-[#00d8aa]">
                15
              </h1>
              <p className="text-xl">Countries</p>
            </div>
            <div className="p-5 text-center ">
              <h1 className="text-3xl font-poppins font-bold text-[#00d8aa]">
                20+
              </h1>
              <p className="text-xl">Nationalities</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-7 mt-10">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185431cb9630050ec76279b_1.png"
                alt=""
              />
            </div>
            <div className="space-y-7">
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185431cd9d41ad55c63fb02_2.png"
                alt=""
              />

              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185431b375449e20c98590f_3.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6185431c6f7cb6d0c1a5bae2_4.png"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <WhatOurTeamSay />
      <div
        style={{
          backgroundImage:
            "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fe472e96f546ff6685525_Inclusivity%20BG.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundSize: "1140px",
        }}
        className="bg-[#12243b] "
      >
        <Container>
          <div className="md:flex justify-center items-center gap-10 font-work">
            <div className="md:w-1/2">
              <h1 className="md:text-left text-center font-poppins text-3xl font-bold mb-5 text-gray-200 leading-10">
                A culture of{" "}
                <span
                  style={{
                    backgroundImage:
                      "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "100% 110%",
                    backgroundSize: "100%",
                  }}
                >
                  inclusivity
                </span>
              </h1>
              <p className="pb-5 text-gray-300">
                At Compuco we believe that differences should be celebrated. We
                embrace diversity and work hard to foster an inclusive and
                inviting work culture for all. By encouraging our team of
                innovators to think outside the box, we are able to do our part
                in bringing about a better, more inclusive, world.
              </p>
              <p className="text-gray-300">
                Over the past decade, we have grown into a truly global team,
                with over 40+ employees spanning across over 15 countries. As a
                proud signatory of the Tech Talent Charter, we are committed to
                creating a nurturing work environment that is free from any
                discrimination. This is enriched by our network of people,
                programs, and tools, which are all designed to help deliver a
                fairer world.
              </p>
            </div>
            <div className="md:w-1/2 p-14">
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618505a9eb3eeb7738dc77b7_Pic%20Inclusivity-p-500.png"
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
      <WorkPlaceBenefit />
    </div>
  );
};

export default WeAreHiring;
