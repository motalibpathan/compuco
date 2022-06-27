import NewsCard from "./NewsCard";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Webinar: How to Make Your Database Fundraise for you",
      img: "https://uploads-ssl.webflow.com/612e0eda2f0633352f9572cd/629f610bc7d8191fbc78d703_How%20to%20Make%20Your%20Database%20Fundraise%20for%20You%20thumb.png",
      by: "Compuco Team",
      time: "June 7, 2022",
    },
    {
      id: 2,
      title: "How it works: CiviCRM - Open Social Integration",
      img: "https://uploads-ssl.webflow.com/612e0eda2f0633352f9572cd/627e195748584f63300bba7f_How%20it%20works%20CiviCRM%20-%20Open%20Social%20Integration.png",
      by: "Marcelo Correa",
      time: "May 13, 2022",
    },
    {
      id: 3,
      title: "The Five most useful 'hidden' features in CiviCRM",
      img: "https://uploads-ssl.webflow.com/612e0eda2f0633352f9572cd/6266b277bc5b30200e01f312_The%205%20most%20useful%20%E2%80%98hidden%E2%80%99%20features%20in%20CiviCRM%20Thumbnail.png",
      by: "By Alex Walmsley",
      time: "April 27, 2022",
    },
  ];
  return (
    <div className="mt-24 max-w-[1140px] mx-auto w-full  px-7">
      <h1 className="font-bold font-poppins md:text-5xl text-3xl text-gray-800 mb-10">
        News and insights
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default News;
