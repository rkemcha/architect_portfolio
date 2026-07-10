/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'],
        serif: ['"Source Sans Pro"', 'sans-serif'],
      },
      colors: {
        // Monochrome palette matching user request
        primary: {
          light: '#ffffff', // pure white
          dark: '#09090b',  // zinc-950
        },
        border: {
          light: '#e5e7eb', // gray-200
          dark: '#27272a',  // zinc-800
        },
      }
    },
  },
  plugins: [],
}
