/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Slate 900
        surface: "#1e293b", // Slate 800
        primary: "#5eead4", // Teal 300
        secondary: "#2dd4bf", // Teal 400
        accent: "#84cc16", // Lime 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
