/** @type {import('tailwindcss').Config} */
const { default: theme, dialog } = require('@material-tailwind/react/theme');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],  
  theme: {
    extend: {},
  },
  plugins: [],
});