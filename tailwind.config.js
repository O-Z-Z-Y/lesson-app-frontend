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
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { 'margin-top': '70em' },
          '100%': { 'margin-top': 0 },
        }
      }
    },
  },
  plugins: [],
}

