module.exports = {
  // mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        workSans: "'Poppins', sans-serif",
      },
      fontsize: {
        "2vw": "20vw"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
