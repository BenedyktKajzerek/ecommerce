/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            DEFAULT: "rgb(255, 255, 255)",
            white: "rgb(245, 245, 245)",
            grey: "#b9b9b9",
            black: "rgb(15, 15, 15)",
            ["primary-light"]: "#ffb54c",
            primary: "#ffa545",
            ["primary-dark"]: "#ff8838",
            ["secondary-light"]: "#FD4D4A",
            secondary: "#fd3a36",
            ["secondary-dark"]: "#E33430"
        }
      }
    },
    plugins: [],
  }
  