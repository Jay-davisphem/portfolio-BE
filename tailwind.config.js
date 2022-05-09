module.exports = {
  content: ["./index.html", "./src/**/*.{vue,jsx,tsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url(src/bg1.jpg)",
      },
    },
    fontFamily: {
      sans: ['"Alegreya Sans SC"', "Helvetica", "sans-serif"],
    },
  },
  plugins: [],
};
