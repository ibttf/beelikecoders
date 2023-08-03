/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: 
  {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '850px',
      // => @media (min-width: 850px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'bubble': ['Lilita One', 'cursive'],
      'light-bubble': ['Noto Sans Vithkuqi', 'sans-serif'],
    },
    animation: {
      wiggle: 'wiggle 0.5s ease-out',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0)' },
          '10%': {transform: 'rotate(1deg)'},
          '20%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(-1deg)' },
          '40%': { transform: 'rotate(0)' },
          '50%': {transform: 'rotate(1deg)'},
          '60%': { transform: 'rotate(-1deg)' },
          '70%': { transform: 'rotate(0)' },
          '80%': {transform: 'rotate(1deg)'},
          '90%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-1)' },
        }},
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}