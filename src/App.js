import { createContext, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blogs from "./pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import Portfolio from "./pages/Portfolio/Portfolio";
import WeAreHiring from "./pages/WeAreHiring/WeAreHiring";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";

export const ProgressContext = createContext(0);

function App() {
  const progressRef = useRef(null);
  return (
    <ProgressContext.Provider value={[progressRef]}>
      <LoadingBar ref={progressRef} height={3} color="#f11946" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/company-culture" element={<WeAreHiring />} />
      </Routes>
      <Footer />
    </ProgressContext.Provider>
  );
}

export default App;
