/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_orange: "#EB6F4C",
        main_gray: "#343A40",
        main_white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
