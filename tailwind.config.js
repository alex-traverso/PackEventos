/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: "#171717",
        lightGrey: "#323232",
        primary: "#F2AD25",
        primaryHover: "#DF941C",
      },
      padding: {
        topBottom: "70px",
        sectionSides: "8rem",
        sectionSidesMobile: "2rem",
      },
      screens: {
        m: "375px",
        xs: "480px",
      },
    },
  },
  plugins: [],
};
