const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'brand-green': {
          500: '#1E6C5B',
          700: '#135a4b',
        },
        'brand-brown': {
          500: '#AB7341',
          700: '#9b6331',
        },
        'brand-blue': {
          500: '#75B2B8',
          700: '#4ea0a8',
          900: '#318b94',
        },
        'brand-pink': '#E4D0BA',
        'brand-gray': '#F3EFE1',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
