const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color:{
      blue: colors.lightBlue
      
    },
    extend: {
      animation: {
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(90deg)' },
          '100%': { transform: 'rotate(-90deg)' },
        }
      }
    },
  },
  variants: {
    animation: ["motion-safe"],
    extend: {},
  },
  plugins: [],
}
