module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  // variants: {
  //   extend: {
  //     outline: ['focus-visible'],
  //     ringColor: ['focus-visible'],
  //     ringOpacity: ['focus-visible'],
  //     ringWidth: ['focus-visible'],
  //     ringOffsetWidth: ['focus-visible'],
  //     opacity: ['disabled'],
  //     cursor: ['hover'],
  //   },
  // },
  plugins: [],
};
