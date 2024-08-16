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
            ["grey-dark"]: "#212121",
            black: "rgb(15, 15, 15)",
            ["primary-light"]: "#ffb54c",
            primary: "#ffa545",
            ["primary-dark"]: "#ff8838",
            ["secondary-light"]: "#FD4D4A",
            secondary: "#fd3a36",
            ["secondary-dark"]: "#E33430",
            pink: "#FF5C7D",
            yellow: "#FFE95C",
            purple: "#CB5CFF",
            cyan: "#5CFFF1",
            green: "#A9FF59",

        },
        screens: {
            'xs': '500px',
            '3xl': '1640px'
        }
      }
    },
    plugins: [],
}
  