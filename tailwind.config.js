module.exports = {
  purge: [
    './src/**/*.svelte',
    './src/**/*.html'
  ],
  theme: {
    extend: {},
  },
  variants: {
    padding: ['responsive', 'hover', 'focus', 'first', 'last'],
    borderWidth: ['responsive', 'hover', 'focus', 'first', 'last'],
  },
  plugins: [],
};
