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
      wiggle: 'wiggle 0.1s infinite',
      drop: 'drop 3s',
      hover: 'hover 3s infinite ease-in-out',
      updown: 'updown 2s infinite ease-in-out'
    },
    extend: {
      keyframes: {
        hover: {
          '0%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': {transform: 'rotate(0deg)'},
          '75%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        updown:{
          '0%': { transform: 'translateY(0) rotate(16deg)' },
          '25%': { transform: 'translateY(8px) rotate(16deg)' },
          '50%': {transform: 'translateY(0) rotate(16deg)'},
          '75%': { transform: 'translateY(-8px) rotate(16deg)' },
          '100%': { transform: 'translateY(0) rotate(16deg)' },
        },
        wiggle: {
          '0%': { transform: 'rotate(0)' },
          '30%': {transform: 'rotate(1deg)'},
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-1deg)' },
        },

        drop:{
          '0%': {  transform: 'rotate(10deg)' },
          '5%': {transform: 'rotate(-15deg)'},
          '10%': { transform: 'rotate(5deg)' },
          '15%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(0)' },
          '100%': { transform: 'translate3D(0, 100vh, 0) rotate(0)' }, 
        }
      
      },
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