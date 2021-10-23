const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "var(--primary-1)",
        200: "var(--primary-2)",
        300: "var(--primary-3)",
        400: "var(--primary-4)",
      },
      secondary: {
        DEFAULT: "var(--secondary-1)",
        200: "var(--secondary-2)",
        300: "var(--secondary-3)",
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
