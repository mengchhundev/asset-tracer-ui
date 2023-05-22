/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    darkMode: false,
    extend: {
      fontFamily: {
        "sp-pro-text-regular": ['sp-pro-text-regular', 'sans-serif'],
        "sp-pro-text-bold": ['sp-pro-text-bold', 'sans-serif'],
        "sp-pro-text-medium": ['sp-pro-text-medium', 'sans-serif'],
        "sp-pro-text-semibold": ['sp-pro-text-semibold', 'sans-serif'],
        "sp-pro-text-heavy": ['sp-pro-text-heavy', 'sans-serif'],
      },
      colors: {
        "primary": "#F8C400",
        "secondary": "#3A3A3A",
        "text-color": "#324C5B",
        "accept": "#6DB33F",
        "reject": "#C52222",
        "reject-light" : "#FFC5C5",
        "pending": "#F8C400",
        "info": "#4583FB",
        "bg-primary": "#F4F4F4",
        "bg-secondary": "#FEFCFB",
        "bg-primary-strock" : "#D0D5DD",
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'light-green' : 'rgba(60, 179, 113, 20%)',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        "border-strock" : "#E1E9EE",
        "error" : "#EE1D52",
        "bg-color" : "#FAFBFC",
        "sidebar" : "#737791",
        "bg-main" : "#F7F8FC",
        "custom-red" :  "#FF6D5C",
        "custom-blue" : "#B3E67B",
        "white":"#FFFFFF",
        "shadow":"#FFD2B3",
        "hover-yellow": "#FFD300",
        "blue-light":"#33B4FF",
        "secondary-yellow": "#F8C400",
        "bg-pink":"#FEFCFB",
        "text-black":"#111827",
        "border-gray-light" : "#edf2f7"
      },
      fontSize: {
        // md: '16px'
        // sm: '0.8rem',
        // base: '1rem',
        // xl: '1.25rem',
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',
      }
    },

  },
  plugins: [require("daisyui"), require('@headlessui/tailwindcss'),],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  }
}

