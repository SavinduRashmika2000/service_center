/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode by adding the 'dark' class
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue accent
        darkBg: '#0F172A',  // Deep dark mode background
        darkCard: '#1E293B',
        lightBg: '#F8FAFC', // Light mode background
        lightCard: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
