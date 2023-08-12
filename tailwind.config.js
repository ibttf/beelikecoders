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
      // => @media (min-width: 1536px) { ... },
      '3xl': '1800px'
    },
    fontFamily: {
      'bubble': ['Lilita One', 'cursive'],
      'light-bubble': ['Noto Sans Vithkuqi', 'sans-serif'],
      'big-bubble': ['Sniglet', 'cursive'],
      'ballon': ['Nunito', 'sans-serif']
    },
    animation: {
      wiggle: 'wiggle 0.1s infinite',
      drop: 'drop 3s',
      hover: 'hover 3s infinite ease-in-out',
      updown: 'updown 4s infinite ease-in-out'
    },
    extend: {
      height: {
        '108': '36rem',
        '116': '42rem',
        '128': '50rem',
        '140': '60rem',
      },
      spacing: {
        '22px':'22px',
        '66px':'66px',
        '90':'22rem',
        '98':'26rem',
        '100':'28rem',
        '108': '36rem',
        '128': '44rem',
        '140': '46rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '16': '16px',
        '20':'20px',
        '80':'80px',
        '40':'40px'
      },
      scale: {
        '10': '0.10',
        '20': '0.20',
        '30': '0.30',
        '40': '0.40',
        '60': '0.60',
        '70': '0.70',
        '80': '0.80',
        '90': '0.90',
        '120': '1.20',
        '175':'1.75',
      },
      keyframes: {
        hover: {
          '0%': { transform: 'rotate(0)' },
          '25%': { transform: 'rotate(1deg)' },
          '50%': {transform: 'rotate(0deg)'},
          '75%': { transform: 'rotate(-1deg)' },
          '100%': { transform: 'rotate(0)' },
        },
        updown:{
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(4px)' },
          '50%': {transform: 'translateY(0)'},
          '75%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0)' },
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
        yellow:{
          1:"#fbeaab",
          5: "#3b484a",
          10: "#F0CF93",
          25: "#e89d43",
          50: '#ffd300',
          100: "#fffff0",
          150: "#ffd15b",
          200: "#fefcbf",
          300: "#faf089",
          400: "#facc15",
          450: "#feb237",
          500: "#ecc94b",
          550: "#d77f4a",
          600: "#d69e2e",
          700: "#b7791f",
          800: "#975a16",
          900: "#744210",
          950: "#9f582d"
        },
        green:{
          50: "#9fb12a",
        },

      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}