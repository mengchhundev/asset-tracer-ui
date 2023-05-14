/** @type {import('tailwindcss').Config} */

// const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        "pending": "#F8C400",
        "info": "#4583FB",
        "bg-primary": "#F4F4F4",
        "bg-secondary": "#FEFCFB",
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        "border-strock" : "#E1E9EE",
        "error" : "#EE1D52",
        "gray-200" :"#edf2f7",
        "white":"#FFFFFF",
        "shadow":"#FFD2B3",
        "hoveryellow": "#FFD300",
        "blue-light":"#33B4FF",
        "bgsecondary":"#F7F8FC",
        "textwhite":"#FFFFFF",
        "secondaryyellow": "#F8C400",
        "textmediem": "#324C5B",
        "bgpink":"#FEFCFB",
        "textblack":"#111827",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },

  },
  plugins: [require("daisyui")],
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

