/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
      },
      backgroundImage: {
        "login-image": "url('src/assets/layout/images/background.jpg')",
        "login-image-sm": "url('src/assets/layout/images/background-sm.jpg')",
      },
    },
  },
  plugins: [],
  important: true,
};

