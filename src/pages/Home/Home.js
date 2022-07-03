import { useRef } from "react";
import useProgress from "../../hooks/useProgress";
import Banner from "./Banner";
import Brands from "./Brands";
import ClientReview from "./ClientReview";
import ContactBox from "./ContactBox";
import NewsAndInsights from "./NewsAndInsights";
import RecentWork from "./RecentWork";
import Service from "./Service";

const Home = () => {
  const homePageRef = useRef(null);
  useProgress(homePageRef);

  return (
    <div ref={homePageRef}>
      <Banner />
      <Service />
      <Brands />
      <ClientReview />
      <RecentWork show={3} />
      <NewsAndInsights />
      <ContactBox />
    </div>
  );
};

export default Home;
