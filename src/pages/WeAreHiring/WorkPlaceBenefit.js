import ReactVisibilitySensor from "react-visibility-sensor";
import ValueCard from "../AboutUs/ValueCard";

const WorkPlaceBenefit = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fc33dcac2d35c9047854c_ic_christmas.svg",
      description: "Additional shutdown holiday days",
    },
    {
      id: 2,
      title: "Work Remotely",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fc33d8164cc1ae20241ee_ic_health.svg",
      description: "A flexible approach to working",
    },
    {
      id: 3,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617febe57ad3158507a2d73b_ic_birthday.svg",
      description: "Additional shutdown holiday days",
    },
    {
      id: 4,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fc33d4426e6d07b3f9946_ic_wellness.svg",
      description: "Additional shutdown holiday days",
    },
    {
      id: 5,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fc33d4426e60f4c3f993e_ic_volunteer.svg",
      description: "Additional shutdown holiday days",
    },
    {
      id: 6,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fc33d5e7284ed23d8a284_ic_learning%20budget.svg",
      description: "Additional shutdown holiday days",
    },
    {
      id: 7,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617febb04c06de7b6ea3a852_ic_health.svg",
      description: "Additional shutdown holiday days",
    },
    {
      id: 8,
      title: "Christmas time!",
      img: "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fc33d15deac7c3698c983_ic_more.svg",
      description: "Additional shutdown holiday days",
    },
  ];
  return (
    <ReactVisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <>
          <div
            style={{
              backgroundImage:
                "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b274efa09bb6_BG_Get%20in%20Touch.svg)",
            }}
            className={`text-center bg-[#00d8aa] font-work ${
              isVisible ? "opacity-100" : "opacity-0"
            } duration-1000 `}
          >
            <div className=" max-w-[1140px] mx-auto w-full md:py-16 p-5">
              <div
                className={` md:mt-10 mt-5 text-center md:text-left  ${
                  isVisible ? "opacity-100" : "opacity-0"
                } duration-1000 delay-500`}
              >
                <h1 className="text-5xl font-bold text-gray-900 font-poppins text-center mb-10">
                  Workplace benefits
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                  {benefitsData.map((benefit) => (
                    <ValueCard
                      key={benefit.id + "benefit"}
                      ourValue={benefit}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </ReactVisibilitySensor>
  );
};

export default WorkPlaceBenefit;
