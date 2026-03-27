/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        cepa: {
          green: '#116A64',  
          blue: '#1C3B5E',   
          silver: '#C0C0C0',
          white: '#FFFFFF',  
          'dark-bg': '#0D1B2D', 
        }
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] }
    },
  },
  plugins: [],
}