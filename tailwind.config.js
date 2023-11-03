/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      boxShadow : {
        'md': '0px 0px 25px -20px ',
        'lg': '0 20px 30px -25px blue'
      }
    },
  },
  plugins: [],
}

