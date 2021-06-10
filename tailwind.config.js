module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#008CCF',
        blue: '#07458E',
        'light-blue': '#0B5AAE',
        'dark-blue': '#053E73',
        yellow: '#FFED19',
        'dark-yellow': '#EDDF35',
        gray: '#E3E0E0',
        'dark-gray': '#AAA7A7'
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.375rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '1.875rem',
        '5xl': '2.25rem'
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1440px'
      },
      spacing: {
        '7.5': '1.875rem',
        '12.5': '3.125rem',
        '14': '3.5rem',
        '15': '3.75rem',
        '22.5': '5.625rem',
        '25': '6.25rem',
        '50': '12.5'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
