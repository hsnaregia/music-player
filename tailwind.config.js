/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Neon Night Palette
        neonNight: {
          midnightBlue: '#1A1A40',  // Background
          electricPink: '#FF477E',   // Main action buttons
          aquaGlow: '#00F5D4',       // Progress bar, volume slider, hover effects
          slateGrey: '#3E3E55',      // Icons, secondary text, inactive controls
        },
      }
    },
  },
  plugins: [],
}