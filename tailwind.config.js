/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        abadi: ["abadi"],
      },
      width: {
        22: "5.5rem",
      },
      height: {
        22: "5.5rem",
      },
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
      boxShadow: {
        logo: "0 0 1rem 0.25rem #FFF",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
