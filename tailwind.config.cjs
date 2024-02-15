/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.2rem',
        md: '2rem',
        lg: '5rem',
      },
    },
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        monoton: ['Monoton', 'cursive'],
      },
      colors: {
        'dark-brown':'#120000',
        beige: '#F0EDE4',
        chocolate: '#3E2723',
        'light-yellow': '#F7D070',
        primary: {
          red: '#E76F51',
          orange: '#F8961E',
          yellow: '#F9C74F',
          green: '#90be6d',
          teal: '#42aa8b',
        },
        neutral: {
          brown: '#4B3616',
          blue: '#577590',
        },
      },
    },
  },
  plugins: [],
};
