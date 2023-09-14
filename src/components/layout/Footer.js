import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const theme = true;
  return (
    <div
      className={`w-full  flex justify-between items-center max-w-6xl mx-auto px-10 py-5 ${
        theme ? "text-black" : "text-white"
      } bottom-0 mobile:flex-col mobile:gap-5 tablet:flex-col tablet:gap-5`}
    >
      <div
        className={
          "flex flex-row gap-2 tablet:flex tablet:flex-row mobile:flex mobile:flex-row  divide divide-x-2 divide-black dark:divide-white"
        }
      >
        <Link to="https://github.com/Tarikkkoc">
          <div className="flex gap-2">
            <img className="w-6" src="/img/github.svg" alt="Github" />
          </div>
        </Link>
        <Link to="https://www.linkedin.com/in/ahmet-tarık-koç-3b952a193/">
          <div className="flex gap-2 pl-2">
            <img className="w-6" src="/img/linkedin.svg" alt="Linkedin" />
          </div>
        </Link>
        <Link to="https://www.instagram.com/ahmet_tarik/">
          <div className="flex gap-2 pl-2">
            <img className="w-6" src="/img/instagram.svg" alt="Instagram" />
          </div>
        </Link>
      </div>
      <div className="mobile:text-right text-black dark:text-white">
        © 2023 Created by Tarikkoc.
      </div>
    </div>
  );
};

export default Footer;
