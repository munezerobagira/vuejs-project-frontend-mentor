module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      color:{
        "primary-dark": "#00252E",
        "primary-pink":"#FF52BF",
        "second-pink":"#FF8FD8"
      }
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
