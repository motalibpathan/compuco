import Banner from "./Banner";
import Brands from "./Brands";
import ClientReview from "./ClientReview";
import ContactBox from "./ContactBox";
import News from "./News";
import RecentWork from "./RecentWork";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Brands />
      <ClientReview />
      <RecentWork />
      <News />
      <ContactBox />
      <div className="mb-24"></div>
    </div>
  );
};

export default Home;
