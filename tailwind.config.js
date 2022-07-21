/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#0D4A7C",
        "main-light": "#026CB6",
        "highlight-dark": "#F8981D",
        "highlight-light": "#FFDD00",
      },
      backgroundImage: {
        "head-panel": "url('/src/img/head_panel.jpg')",
        "content-panel": "url('/src/img/content_panel.jpg')",
        "links-panel": "url('/src/img/links_panel.jpg')",
      },
    },
  },
  plugins: [],
};
