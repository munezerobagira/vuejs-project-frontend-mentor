const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      primary: { DEFAULT: "#070439", light: "#585989" },
      secondary: "#3065F8",
      neutral: {
        DEFAULT: "#F6F6FE",
        dark: "#BFBFBF",
      },
      accent: "#3C9F8F",
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
