import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import useProgress from "../../hooks/useProgress";
import GetInTouch from "../Shared/GetInTouch";
import ServiceCard from "./ServiceCard";
import ServiceList from "./ServiceList";

const WhatWeDo = () => {
  const whatWeDoRef = useRef(null);
  useProgress(whatWeDoRef);

  const worksData = [
    {
      id: 1,
      title: "Websites",
      description:
        "We specialise in creating ambitious, highly accessible industry-leading digital experiences for charities, membership organisations and government agencies, who wish to inform, engage and transform the world in which we live.",
      illustration:
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172bb82fb626b3ed7339e4b_Illustration_websites-p-500.png",
      technologies: [
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172bcb953ba361a1b79b1f2_Wordmark_blue_RGB%201.png",
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172bcb94eb1f1172285628c_shopify-logo%201.png",
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172bcbaad906d2f553653a4_Webflow%201.png",
      ],
    },
    {
      id: 2,
      title: "Customer Relationship Management",
      description:
        "We deliver digital transformation for nonprofit organisations, at scale. Using the open source software CiviCRM, together we reimagine your processes, using technology to empower your team to maximise effectiveness and impact.",
      illustration:
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172bf3cb2268979666b30c6_Illustration_CRM-p-500.png",
      technologies: [
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c4073670c620fe60bfac_CiviCRM%201.png",
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c417c25af22ab9d32ab9_60cb0b080a4741e93f107d5d_Logo_White%201.png",
      ],
    },
    {
      id: 3,
      title: "Community platforms",
      description:
        "We build next generation social platforms for forward looking charities and membership organisations that foster sharing, engagement and discussion so that your online community can grow.",
      illustration:
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c131615154cec6c67ff3_Illustration_CP-p-500.png",
      technologies: [
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172bcb953ba361a1b79b1f2_Wordmark_blue_RGB%201.png",
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c43aced31aa732c414c9_Open-Social-Logo-Bluedots-Bluename-Large%201.png",
      ],
    },
    {
      id: 4,
      title: "Marketing automation",
      description:
        "We integrate leading technology to provide the best possible tools for marketers and communicators to ensure that you can get your message to the world.",
      illustration:
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c17508acc07dc431766f_Illustration_MA-p-500.png",
      technologies: [
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c53501fb51bfe7287427_1280px-Dialogflow_logo%201.png",
        "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6172c54fae5883ba5379037c_Mautic_Logo_RGB_LB%201.png",
      ],
    },
  ];

  return (
    <div ref={whatWeDoRef}>
      <div className=" md:container lg:max-w-[1140px] mx-auto w-full overflow-hidden lg:overflow-visible">
        <div className="md:flex justify-center items-center md:py-10 py-2 md:my-10 my-0 px-5">
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <>
                <div
                  className={`md:w-3/5 w-full  ${
                    isVisible
                      ? "opacity-100 translate-x-0 "
                      : "-translate-x-20 opacity-0 "
                  } duration-1000 `}
                >
                  <h1 className="md:text-6xl text-4xl font-poppins font-bold leading-tight ">
                    What we do
                  </h1>
                  <div className="text-gray-700 font-work space-y-7 mt-7 w-4/5">
                    <p>
                      We are a creative technology agency who specialise in
                      working with social purpose organisations such as
                      charities, membership organisations and grant giving
                      foundations.
                    </p>
                    <p>
                      We build market leading websites, customer relationship
                      management systems and community platforms that help
                      organisations reimagine the way they work, so they can
                      focus on impact.
                    </p>
                    <img
                      className="w-32 mx-auto"
                      src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/616ebedf65e7692a9d8e593d_emblem.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className={`md:w-2/5 relative w-full ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "translate-x-20 opacity-0"
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
              </>
            )}
          </ReactVisibilitySensor>
        </div>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <>
              <div
                className={`${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "translate-y-20 opacity-0"
                } duration-1000 p-3`}
              >
                <h1 className="md:text-5xl text-3xl font-bold text-center text-gray-900 text-poppins">
                  Products we work with
                </h1>
                <img
                  className="w-64  mx-auto"
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
                  alt=""
                />
                <p className="md:w-2/5 w-full mx-auto text-center my-5 font-work text-gray-600">
                  We specialise in working with Open Source technologies such as
                  Drupal and CiviCRM, but we also like to work with a number of
                  other frameworks and technologies.
                </p>
              </div>
            </>
          )}
        </ReactVisibilitySensor>
        <ReactVisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <>
              <div
                className={`mt-10 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "translate-y-20 opacity-0"
                } duration-1000 `}
              >
                {worksData.map((work) => (
                  <ServiceCard key={work.id + "work"} work={work} />
                ))}
              </div>
            </>
          )}
        </ReactVisibilitySensor>
      </div>
      <ServiceList />
      <GetInTouch />
    </div>
  );
};

export default WhatWeDo;
