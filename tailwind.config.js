const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
const plugin = require('tailwindcss/plugin');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  mode: 'jit',
  darkMode: 'media',
  purge: ['./src/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Lato', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        a: {
          charcoal: '#1d1d1d',
          green: '#18bd37',
          teal: '#18a5bd',
        },
      },
      screens: {
        '3xl': '1800px',
      },

      maxWidth: {
        '8xl': '1800px',
      },
    },
  },
  variants: {},
  plugins: [
    forms({ strategy: 'class' }),
    typography,
    aspectRatio,
    plugin(({ addVariant, e }) => {
      addVariant('scrolled', ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.scrolled .${e(`scrolled${separator}${className}`)}`,
        );
      });
    }),
  ],
};
