import {defaultTheme} from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: '#0f172a',
        },
        fontFamily:{
          roboto:['Roboto', ...defaultTheme.fontFamily.sans]
        }
      },
    },
    plugins: [],
  }