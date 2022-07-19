/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'main-dark': '#0D4A7C',
        'main-light': '#026CB6',
        'highlight-dark': '#F8981D',
        'highlight-light': '#FFDD00',
      },
    },
  },
  plugins: [],
}
