const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('colors.gray.200', 'currentColor'),
      }),
      minWidth: {
        '24': '6rem',
        ...defaultTheme.minWidth,
      },
      maxWidth: {
        '3': '0.75rem',
        '7': '1.75rem',
        '22': '5.625rem',
        '32': '8rem',
        ...defaultTheme.maxWidth,
      },
      maxHeight: {
        'none': 'none',
        '56': '14rem',
        ...defaultTheme.maxWidth,
      },
      fontSize: {
        'xxs': '0.688rem',
        ...defaultTheme.fontSize,
      },
      opacity: {
        '65': '0.65',
        ...defaultTheme.opacity,
      },
      fontFamily: {
        sans: [
          'Nunito',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      inset: {
        '100' : '100%',
        ...defaultTheme.inset,
      },
      colors: {
        ampjar_primary: '#2983ff',
        ampjar_border: '#adb2ba'
      }
    },
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        'h1': { 
          fontSize: config('theme.fontSize.2xl'),
          fontWeight: config('theme.fontWeight.bold'),
          margin: '0 0 ' + config('theme.spacing.8')
        },
        'h2': {
          fontSize: config('theme.fontSize.lg'),
          fontWeight: config('theme.fontWeight.bold'),
          margin: '0 0 ' + config('theme.spacing.2')
        },
      })
    },
  ],
}
