module.exports = {
  content: ["./templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        'dev-dark': '#0d1117',
        'dev-gray': '#21262d',
        'dev-accent': '#58a6ff'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}