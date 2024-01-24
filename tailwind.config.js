/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '3xl':"0 10px 40px rgba(0, 0, 0, 0.1)"
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        serifDisplay: ['DM Serif Display', 'sans-serif']
      },
      colors:{
        'green': '#28a745',
        'light': '#f8f9fa',
        'dark': '#343a40',
      },
     
    },
  },
  plugins: [],
}

