/** @type {import("tailwindcss").Config} */
const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? "build" : "watch";

module.exports = {
  prefix: "",
  mode: "jit",
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        primary: '#031d2e',
        secondary: '#67475a',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
};
