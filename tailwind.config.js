/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            color1: '#240D57',
            grad1: '#8456EC',
            grad2: '#E87BF8'
        },
        maxWidth: {
            'btn': '375px',
            'crd': '400px',
            'lg': '700px'
        },
      extend: {},
    },
    plugins: [],
  }