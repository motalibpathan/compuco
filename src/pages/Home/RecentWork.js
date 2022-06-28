import WorkCard from "./WorkCard";

const RecentWork = () => {
  const worksData = [
    {
      id: 1,
      title: "The British Association of Social Workers",
      img: "https://uploads-ssl.webflow.com/612e0eda2f0633352f9572cd/6239b08e7ee9fb1451b58d68_BASW.png",
      link: "",
    },
    {
      id: 2,
      title: " The Association for Science Education",
      img: "https://uploads-ssl.webflow.com/612e0eda2f0633352f9572cd/6182d9b7c02c52295a5e6a55_ASE-p-800.png",
      link: "",
    },
    {
      id: 3,
      title: "PRI Collaboration Portal",
      img: "https://uploads-ssl.webflow.com/612e0eda2f0633352f9572cd/6182d47c22752e30fa1d17db_PRI-p-800.png",
      link: "",
    },
  ];
  return (
    <div className="mt-24 max-w-[1140px] mx-auto w-full px-10">
      <div>
        <h1 className="md:text-5xl text-3xl font-poppins font-bold">
          Recent work
        </h1>
        <img
          className="md:w-96 w-56"
          src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b2f7c0a09bad_Underline-02.svg"
          alt=""
        />
      </div>
      <div className="mt-10">
        <WorkCard work={worksData[0]} />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <WorkCard work={worksData[1]} />
          <WorkCard work={worksData[2]} />
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
