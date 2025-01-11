/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          "200": "#e1e6ff",
          "500": "#5850c9",
          "700": "#5046e4",
        },
        gray: {
          "100":"#bcc0c3",
          "300": "#f9fbfc",
          "400":"#4f5362",
          "500":"#1f2a39",
          "600":"#3e3e4d",
          "800": "#1f2a39"
        }
      }
    },
  },
  plugins: [],
}