/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0a426e ",
        "blue-secondary": "#093658 ",
        "blue-tertiary": "#0a426e ",

        "white-primary": "#ffffff ",
        "white-secondary": "#eaeaea ",
        "white-tertiary": "#aeaeae ",

        "black-primary": "#000000 ",
        "black-secondary": "#282828 ",
        "black-tertiary": "#aeaeae ",
      },
        gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

