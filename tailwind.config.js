/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'slide-in-right': {
          '0%': {
            transform: 'translateX(1000px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      colors: {
        layer:{
          backg:'#222831',
          icons:'#393E46',
          boxes:'#FFD369',
          txt:'#EEEEEE',
        },
      },
    },
  },
  plugins: [],
};
