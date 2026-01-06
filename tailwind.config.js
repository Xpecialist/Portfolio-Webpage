/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Slate 950
        surface: "#1e293b", // Slate 800
        primary: "#10b981", // Emerald 500
        secondary: "#84cc16", // Lime 500
        accent: "#06b6d4", // Cyan 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
