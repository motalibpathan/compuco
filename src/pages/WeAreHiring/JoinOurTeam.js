import { Link } from "react-router-dom";

const JoinOurTeam = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b274efa09bb6_BG_Get%20in%20Touch.svg)",
      }}
      className="text-center bg-[#00d8aa]"
    >
      <div className=" max-w-[1140px] mx-auto w-full md:py-16 p-5">
        <div className="md:flex md:mt-10 mt-5 text-center md:text-left">
          <div className="md:w-2/5 w-full p-5">
            <img
              className="w-20 md:mx-0 mx-auto"
              src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fcafdb292f8f6849e8156_team_dark.svg"
              alt=""
            />
            <h1 className="md:text-5xl font-poppins text-4xl font-bold text-gray-900">
              Join our team
            </h1>
          </div>
          <div className="md:w-3/5 w-full space-y-7 text-lg text-gray-700 font-work p-5">
            <p>
              We're building a thriving culture of growth and inclusivity at
              Compuco, where passionate people are encouraged to fulfil their
              potential. Ready to build your career and help deliver social
              good?
            </p>
            <Link
              to="/contact-us"
              className="py-2 text-center bg-white px-5 rounded-lg inline-block"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
