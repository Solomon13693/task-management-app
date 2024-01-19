/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#2B3674",
      },
      fontSize: {
        xs: '12.5px', 
      },
    },
  },
  plugins: [],
}