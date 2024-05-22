/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.word-wrap-hyphenate': {
          'overflow-wrap': 'break-word',
          'hyphens': 'auto',
        },
      };

      addUtilities(newUtilities, ['responsive']);
    },
  ],
}