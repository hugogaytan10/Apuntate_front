/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gris-oscuro': '#2C3A3A',
        'fondo': '#EFFAFA',
        'primario': '#5BA4A4',
        'detalles': '#858585'
      },
    },
  },
  plugins: [require("daisyui")],
}

