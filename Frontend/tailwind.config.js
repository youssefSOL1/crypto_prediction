/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}","./components/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}