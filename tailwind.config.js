/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'false'
  content: [],
  theme: {
    screens: {
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px,'
    },
    extend: {},
  },
  plugins: [],
}

