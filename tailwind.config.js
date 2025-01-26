/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        progress: 'progress 2s ease-in-out',
      },
      colors: {
        reactBlue: '#61dafb', // Nom personnalisé pour la couleur
      },
    },
  },
  plugins: [],
}

