/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "mainImage":"url('/src/assets/mainPage.png')"
      }
    },
  },
  plugins: [],
}