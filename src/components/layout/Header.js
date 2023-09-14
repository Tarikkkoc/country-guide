import React, { useEffect, useState } from "react";

const { classList } = document.documentElement;
classList.add("dark");

const Header = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (classList[0] === "dark") {
      classList.remove("dark");
      classList.add("light");
    } else {
      classList.add("dark");
      classList.remove("light");
    }

    setTheme(classList[0]);
  };

  return (
    <div className="container flex justify-between max-w-6xl mx-auto px-10 py-5 ">
      <h2
        className={
          "font-barlow text-2xl text-black dark:text-white font-bold rounded-xl p-2 cursor-pointer"
        }
      >
        <a href="#">CountryGuide</a>
      </h2>
      <button
        className={
          "text-black dark:text-white border capitalize border-gray-300 dark:border-zinc-950 dark:bg-zinc-900 font-barlow py-1 px-3 bg-gray-200 hover:bg-zinc-900 hover:text-white rounded-md transition duration-200 ease-in-out dark:hover:bg-gray-200 dark:hover:text-black"
        }
        onClick={changeTheme}
      >
        {theme}
      </button>
    </div>
  );
};

export default Header;
