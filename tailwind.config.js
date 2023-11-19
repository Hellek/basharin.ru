const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        black: '#333333',
      },
    },
    screens: {
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })
    }),
  ],
}
