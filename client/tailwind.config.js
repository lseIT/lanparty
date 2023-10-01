/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-ev": "#060c2e",
        "color-accent": "#78e800",
      },
      fontSize: {
        '1234xl': '1.752rem',
      }
    },
  },
  plugins: [],
};
