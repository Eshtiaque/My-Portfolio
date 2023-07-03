/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      bodyFont:["poppins", "sans-serif"],
      titleFont:["poppins", "sans-serif"]
    },
    animation:{
      "spin-slow":"spin 15s linear infinite",
      "reverse-slow":"reverse-spin 15s linear infinite"
    },
    keyframes: {
      'reverse-spin': {
        from: {
          transform: 'rotate(360deg)'
        },
      }
    },
  
  },
  plugins: [require("daisyui")],
}

