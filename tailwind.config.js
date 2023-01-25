/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        land: { raw: '(min-width: 650px)', raw: '(max-height: 420px)' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
