const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    extend: {
      colors: {
        primary: '#703a95',
        'primary-dark': '#532b6e',
        'primary-light': '#f1ebf4'
      },
      fontFamily: {
        sans: ['Manrope', 'Inter var', ...defaultTheme.fontFamily.sans]
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
