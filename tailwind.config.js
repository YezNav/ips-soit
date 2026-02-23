/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#F5C518",
      },
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
