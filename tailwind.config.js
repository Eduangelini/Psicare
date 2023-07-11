/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    corePlugins: {
      aspectRatio: false,
    },
    extend: {},
    plugins: [
      require('@tailwindcss/aspect-ratio'),
    ],
  }
}
