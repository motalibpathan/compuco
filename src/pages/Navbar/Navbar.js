import { Link } from "react-router-dom";
const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="/what-we-do">What we do</Link>
      </li>
      <li>Portfolio</li>
      <li>Blog</li>
      <li>We are hiring</li>
      <li className="px-3 py-1 bg-gray-500 text-white rounded-md">
        <Link to="/contact-us">Contact us</Link>
      </li>
    </>
  );
  return (
    <div className="md:w-[1140px] mx-auto px-5 py-7 flex justify-between">
      <div>
        <Link to="/">
          <img
            src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b209eea09bac_primary.svg"
            alt=""
          />
        </Link>
      </div>
      <ul className="md:flex gap-x-5 items-center hidden">{navMenu}</ul>
    </div>
  );
};

export default Navbar;
