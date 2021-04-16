module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,js,php,svelte}'
    ]
  },
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
