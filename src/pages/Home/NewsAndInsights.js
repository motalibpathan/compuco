import ReactVisibilitySensor from "react-visibility-sensor";
import { newsAndInsightsData } from "../../assets/newsAndInsightsData";
import NewsCard from "./NewsCard";

const NewsAndInsights = () => {
  const newsAndInsights = newsAndInsightsData.slice(1, 4);
  return (
    <div className="mt-24 max-w-[1140px] mx-auto w-full  px-7">
      <ReactVisibilitySensor>
        {({ isVisible }) => (
          <h1
            className={`font-bold font-poppins md:text-5xl text-3xl text-gray-800 mb-10 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "translate-y-10 opacity-0"
            } duration-1000 `}
          >
            News and insights
          </h1>
        )}
      </ReactVisibilitySensor>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {newsAndInsights.map((news) => (
          <NewsCard key={news.id + "news"} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsAndInsights;
