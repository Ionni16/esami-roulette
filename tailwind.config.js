/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          // Sostituiamo eventuali richiami a oklch
          primary: "#4f46e5",
          secondary: "#ec4899",
        }
      }
    },
    plugins: []
  }
  