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
        "reject-light" : "#FFC5C5",
        "pending": "#F8C400",
        "info": "#4583FB",
        "bg-primary": "#F4F4F4",
        "bg-secondary": "#FEFCFB",
        'blue_color': '#1fb6ff',
        'purple_color': '#7e5bef',
        'pink_color': '#ff49db',
        'orange_color': '#ff7849',
        'green_color': '#13ce66',
        'yellow_color': '#ffc82c',
        'gray-dark_color': '#273444',
        'gray_color': '#8492a6',
        'gray-light_color': '#d3dce6',
        "border-strock" : "#E1E9EE",
        "error" : "#EE1D52",
        "errPopup_color": '#FF6D5C',
        "sucPopup_color" : '#B3E67B'
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

