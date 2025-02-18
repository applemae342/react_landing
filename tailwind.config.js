/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { // 
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        oblivian: ['Oblivian', 'sans-serif'],
        archerus: ['Archerus Feral Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
