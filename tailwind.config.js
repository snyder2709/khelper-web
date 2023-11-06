/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#60BA19",
        secondary: "#10083F",
        primary: "#0C4DCE",
        danger: "#FF0000",
        grey: "#F9F9F9",
        darkGrey: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
