import React from "react";
import Footer from "./Footer";
import Navbar from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      id="layout"
      className={`text-white py-3 dark:text-black font-barlow bg-lightSky dark:bg-darkHorizon `}
    >
      <div
        className={"bg-lightSky dark:bg-darkHorizon  w-full fixed top-0 z-10"}
      >
        <Navbar />
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
