/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#82C0CC",
        secondary: "#489FB5",
        light: "#EDE7E3",
        dark: "#16697A",
        orangina: "#FFA62B",
      }
    },
  },
  plugins: [],
}