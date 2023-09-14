/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      tablet: { max: "919px", min: "768px" },
      // => @media (max-width: 991px) { ... }
      desktop: { max: "1231px", min: "920px" },
      // => @media (max-width: 1231px) { ... }
    },
    extend: {
      colors: {
        darkHorizon: "rgb(0, 0, 0)",
        lightSky: "rgb(255, 255, 255)",
        darkLayout: "rgb(24 24 27)",
        lightLayout: "rgb(249 250 251)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
