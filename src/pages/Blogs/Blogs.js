import { useRef } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import { newsAndInsightsData } from "../../assets/newsAndInsightsData";
import useProgress from "../../hooks/useProgress";
import NewsCard from "../Home/NewsCard";
import Container from "../Shared/Container";
import GetInTouch from "../Shared/GetInTouch";

const Blogs = () => {
  const blogsRef = useRef(null);
  useProgress(blogsRef);
  return (
    <div ref={blogsRef}>
      <Container>
        <div className="lg:flex justify-center items-center md:py-10 py-2 md:my-10 my-0 px-5 md:overflow-visible overflow-hidden">
          <div className="md:w-3/5 w-full">
            <h1 className="md:text-6xl text-4xl font-poppins font-bold leading-tight ">
              Innovate together,
            </h1>
            <h1 className="md:text-6xl text-4xl  font-poppins font-bold leading-tight ">
              grow{" "}
              <span
                style={{
                  backgroundImage:
                    "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg)",
                  backgroundPosition: "0% 100%",
                }}
                className="z-0 relative bg-no-repeat"
              >
                together
              </span>
            </h1>
          </div>
          <ReactVisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <div
                className={`md:w-2/5 relative w-full ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "translate-x-32 opacity-0"
                } duration-1000 `}
              >
                <img
                  className="w-full md:mt-0 mt-5"
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6176a5b6aa35a314d020ac6d_Illustration_Blog.svg"
                  alt=""
                />
              </div>
            )}
          </ReactVisibilitySensor>
        </div>
      </Container>
      <div className="relative">
        <Container>
          <h1 className="text-gray-600 font-poppins text-4xl font-bold py-10">
            News and News and insights
          </h1>
          <img
            className="w-full absolute top-0 right-0"
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/623ae400fb55b35111eecaa3_blog-bg-main.svg"
            alt=""
          />
          <div className="w-full mb-10">
            <ReactVisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <div
                  className={`rounded-lg overflow-hidden bg-white shadow-lg relative ${
                    isVisible ? " translate-y-0" : "translate-y-10 "
                  } duration-1000 `}
                >
                  <p className="absolute top-5 right-5 text-gray-700 bg-gray-50 rounded-md py-1 px-2 text-xs uppercase">
                    {newsAndInsightsData[0].category}
                  </p>
                  <img
                    className="w-full "
                    src={newsAndInsightsData[0].img}
                    alt=""
                  />
                  <div className="p-3">
                    <div className="flex items-center gap-x-3 text-gray-500 font-work">
                      <p>By {newsAndInsightsData[0].by}</p>
                      <p>On {newsAndInsightsData[0].time}</p>
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-gray-600 mt-3 hover:text-[#00d8aa] duration-500">
                      {newsAndInsightsData[0].title}
                    </h2>
                  </div>
                </div>
              )}
            </ReactVisibilitySensor>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 mb-14">
            {[...newsAndInsightsData.slice(1)].map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </Container>
      </div>
      <GetInTouch />
    </div>
  );
};

export default Blogs;
