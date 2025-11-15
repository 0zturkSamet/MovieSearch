/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f9d3b4',
          dark: '#212426',
          gray: '#343739',
        }
      }
    },
  },
  plugins: [],
}
