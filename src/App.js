import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import WhatWeDo from "./pages/WhatWeDp/WhatWeDo";

export const ProgressContext = createContext(0);

function App() {
  const [progress, setProgress] = useState(10);
  return (
    <ProgressContext.Provider value={[progress, setProgress]}>
      <LoadingBar
        height={3}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>
      <Footer />
    </ProgressContext.Provider>
  );
}

export default App;
