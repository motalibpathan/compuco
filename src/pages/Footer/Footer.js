const Footer = () => {
  const brandsLogo = [
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6239ab03b23829deb04b59ce_MemberWise.svg",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6131e607abd3b28e113d59c8_crown%20commercial.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/613846ff64b2bde778bff0d9_drupal.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6138471c5ce8c868c938053c_Civi_Contributor.png",
    "https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/613847328de78f848afa88ad_Civi_Partner.png",
  ];
  return (
    <>
      <div className="md:mt-24 mt-5 max-w-[1140px] mx-auto w-full md:px-10 px-5">
        <div className="flex flex-wrap md:justify-between justify-center items-center gap-x-10 gap-y-7">
          {brandsLogo.map((logo, i) => (
            <img className="max-w-1/5 h-[90px]" key={i} src={logo} alt="" />
          ))}
        </div>
      </div>
      <div className="bg-[#f9fcfe]">
        <div className="mt-24 max-w-[1140px] mx-auto w-full px-10 py-10 md:flex justify-between">
          <div className="md:w-3/5 w-full mb-10">
            <div className="text-gray-500 font-work">
              <img
                src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b209eea09bac_primary.svg"
                alt=""
              />
              <p className="mt-5">We empower socially responsible </p>
              <p>organisations with the digital tools they need </p>
              <p> to build a better world</p>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <a href="/">
                <img
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61272576103339c839c20335_Linkedin.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/6127259c5f6020b99fce2567_Facebook.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/612725b11657451af230353a_Twitter.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/612725d4f7057f7760025f8c_YouTube.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="md:w-2/5 w-full flex justify-between gap-5 text-gray-700">
            <div>
              <h1 className="text-xl font-poppins font-bold mb-5">Company</h1>
              <ul className="space-y-5">
                <li>About Us</li>
                <li>What we do</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-poppins font-bold mb-5">Support</h1>
              <ul className="space-y-5">
                <li>Privacy policy</li>
                <li>Cookie policy</li>
                <li>Modern slavery statement</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center p-7 border-2 border-t text-gray-600 font-work">
          © 2022, Compucorp Ltd. trading as Compuco. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
