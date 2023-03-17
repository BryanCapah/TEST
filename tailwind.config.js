/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seeds-purple': '#7555DA',
        'seeds-green': '#4FE6AF',
        'seeds-button-green': '#3AC4A0'
      },
      backgroundImage: {
        'hello': "url('../src/assets/hello.png')",
        'ellipse-purple': "url('../src/assets/ellipse-purple.png')",
      },
      backgroundSize: {
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',
        '120%': '120%',
        '140%': '140%',
        '160%': '160%',
        '180%': '180%',
      },
      rotate: {
        '270': '270deg'
      },
      boxShadow: {
        'center': '0 0px 1px 1px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
