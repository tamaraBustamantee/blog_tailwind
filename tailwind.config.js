/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.9)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'tahiti': {
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#ser185d',
          800: '#9d174d',
          900: '#831843',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-lg': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
        },
      });
    },
  ],
};

