module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orangePrimary: "#EE4D2D",
        orangePrimaryDarker: "#B40C00",
        orangePrimaryLighter: "#ff8059",
        orangeSecondary: "#ff6d00",
        orangeSecondaryDarker: "#c43c00",
        orangeSecondaryDarkerer: "#912C00",
        orangeSecondaryLighter: "#ff9e40",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
