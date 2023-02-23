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
        primary: "#FCBB3B",
      },
      padding: {
        sectionTop: "50px",
        sectionBottom: "75px",
        sectionSides: "10rem",
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
