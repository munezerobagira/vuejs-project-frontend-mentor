const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "",
      secondary: "",
      white: colors.white,
      gray: colors.trueGray,
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
