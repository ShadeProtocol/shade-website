/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
   "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{html,js,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/layout.tsx"

  ],
  safelist: [
    'animate-blob1',
    'animate-blob2',
    'animate-blob3',
  ],
  theme: {
    extend: {
      keyframes: {
        blob1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '33%':      { transform: 'translate(60vw, 20vh) scale(1.1) rotate(120deg)' },
          '66%':      { transform: 'translate(10vw, 60vh) scale(0.9) rotate(240deg)' },
        },
        blob2: {
          '0%, 100%': { transform: 'translate(60vw, 20vh) scale(1) rotate(0deg)' },
          '33%':      { transform: 'translate(10vw, 60vh) scale(1.1) rotate(120deg)' },
          '66%':      { transform: 'translate(0, 0) scale(0.9) rotate(240deg)' },
        },
        blob3: {
          '0%, 100%': { transform: 'translate(10vw, 60vh) scale(1) rotate(0deg)' },
          '33%':      { transform: 'translate(0, 0) scale(1.1) rotate(120deg)' },
          '66%':      { transform: 'translate(60vw, 20vh) scale(0.9) rotate(240deg)' },
        },
      },
      animation: {
        blob1: 'blob1 8s ease-in-out infinite',
        blob2: 'blob2 8s ease-in-out infinite',
        blob3: 'blob3 8s ease-in-out infinite',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};