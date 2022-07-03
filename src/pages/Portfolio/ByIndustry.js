const ByIndustry = () => {
  const charityBands = [
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f222507e46e6da6d06_wikimedia.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f2db060af9c5dbe211_zing.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f2c7509592537d94d1_myisrael.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f224fc6d4c6a2774ac_farm%20africa.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f2e6f7487bb285a0af_city-of-london%201.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f261fc34855017f533_cern.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f2e0b0d34648aa0c5a_disability%20rights.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387f25eeec98b16084d1b_royal-society-edinburgh.png",
  ];
  const membership = [
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b6b51f5de26de77a6b_basw.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b64130b46b9d2660bd_ase-logo.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b6b51f5d5c81e77a6d_world-heart-federation.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b63ae5e332c8473700_university-of-cambridge.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b632debe629ed0ed8b_national-education-union.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b64130b4f91c2660bc_ies.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b61d096cf52223367e_PRI.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b6e9214c9fb6f108bc_ACU.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b6aee730b0592088b2_io.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b622507e42ddda6cd4_political-studies-association.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b68252ac460021425e_society-of-authors.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618387b6edcda45ec3d55eb3_arts-society%201.png",
  ];
  const socialService = [
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61838832800458866dcd188a_GIZ.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/618388329f520b0e93f8b2ae_venus-centre.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61838832e9214c26a9f10b17_police-scotland.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6183a78360c5b249a9c703e7_channels4_profile.jpg",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61838833b51f5d9c3ee77aa3_social-work-scotland.png",
  ];
  return (
    <div
      style={{
        backgroundImage:
          "url(https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/617fdb59c354f2027ba5ce85_Client%20BG.png)",
      }}
      className="mt-14 bg-[#f9fcfe]"
    >
      <div className="mt-24 max-w-[1140px] mx-auto w-full md:p-10 p-5">
        <h1 className="text-4xl font-bold font-poppins text-center py-16 text-gray-700">
          By industry{" "}
        </h1>
        <p className="text-center text-2xl font-work mb-5">Charity</p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8 justify-items-center px-5 py-5 bg-white rounded-lg shadow-md">
          {charityBands.map((charity, i) => (
            <div key={i} className="w-16">
              <img className="w-full" src={charity} alt="" />
            </div>
          ))}
        </div>

        <p className="text-center text-2xl font-work mb-5 mt-14">Membership</p>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-6 justify-items-center px-5 py-5 bg-white rounded-lg shadow-md">
          {membership.map((member, i) => (
            <div key={i} className="w-16">
              <img className="w-full" src={member} alt="" />
            </div>
          ))}
        </div>

        <p className="text-center text-2xl font-work mb-5 mt-14">
          Social Services
        </p>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-6 justify-items-center content-center px-5 py-5 bg-white rounded-lg shadow-md mb-16">
          {socialService.map((social, i) => (
            <div key={i} className="w-16">
              <img className="w-full" src={social} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByIndustry;
