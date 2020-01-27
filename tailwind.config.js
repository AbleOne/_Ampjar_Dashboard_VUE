const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.200', 'currentColor'),
    }),
    
    extend: {
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
        bright_blue: '#2983FF',
        dark_blue: {
          default: '#718096',
          active: '#2B325B',
        },
        border_color: '#adb2ba'
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
