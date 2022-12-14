/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      tenor: ["Tenor Sans", "sans - serif"],
    },
    extend: {
      screens: {
        xs: "360px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
