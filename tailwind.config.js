/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F19",
        neonPurple: "#9B5CFF",
        neonBlue: "#00E5FF",
        neonGreen: "#00FF9C",
      },
      boxShadow: {
        neon: "0 0 20px rgba(155,92,255,0.6)",
      }
    }
  },
  plugins: [],
}
