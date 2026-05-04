/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#f5c842',
        'gold-dark': '#c9890a',
        'dark-bg': '#0d0500',
        'dark-card': '#1e0d00',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        raleway: ['Raleway', 'sans-serif'],
        bengali: ['Noto Sans Bengali', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
}
