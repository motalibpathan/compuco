import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const activeLink = (navData) =>
    navData.isActive
      ? "underline text-gray-900 font-semibold"
      : "text-gray-600";

  const [isOpen, setIsOpen] = useState(false);

  const navMenu = (
    <>
      <span>
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
      </span>
      <span>
        <NavLink className={activeLink} to="/about-us">
          About Us
        </NavLink>
      </span>
      <span>
        <NavLink className={activeLink} to="/what-we-do">
          What we do
        </NavLink>
      </span>
      <span>
        <NavLink className={activeLink} to="/portfolio">
          Portfolio
        </NavLink>
      </span>
      <span>
        <NavLink className={activeLink} to="/blog">
          Blog
        </NavLink>
      </span>
      <span>
        <NavLink className={activeLink} to="/company-culture">
          We are hiring
        </NavLink>
      </span>
      <span className="lg:px-3 py-1 lg:bg-gray-500 lg:text-white rounded-md">
        <Link to="/contact-us">Contact us</Link>
      </span>
    </>
  );
  return (
    <nav className="bg-white z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-3">
        <div className="w-full flex items-center justify-between h-16">
          <div className="w-full flex items-center justify-between">
            <div className="lg:w-1/5 flex-shrink-0">
              <Link to={"/"}>
                <img
                  className="h-52 w-52"
                  src="https://uploads-ssl.webflow.com/61235570c731b23718a09b6a/61235570c731b209eea09bac_primary.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="w-4/5 hidden lg:flex justify-end">
              <div className="ml-10 flex items-baseline space-x-10 text-work">
                {navMenu}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-900"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden relative bg-white z-10" id="mobile-menu">
            <div
              ref={ref}
              className="px-3 pt-2 pb-3 flex flex-col space-y-5 text-2xl sm:px-10 bg-gray-50 absolute top-0 left-0 z-[1000] w-full"
            >
              {navMenu}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
