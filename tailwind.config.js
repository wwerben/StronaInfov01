/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      transparent: 'transparent',
      'blue2': '#334257',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Poppin', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      screens: {
       'widescreen': { 'raw': '(min-ascpect-ratio: 3/2)'},
       'tallscreen': { 'raw': '(min-ascpect-ratio: 13/20)'},
      },
      spacing: {
          '128': '32rem',
          '110': '750px',
          '256': '64rem',
      },
      
    },
  },

  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('tailwindcss-animated')
  ],
}
