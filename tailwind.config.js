/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        optum: {
          blue: {
            DEFAULT: '#354168',
            light: '#8895b1',
          },
          red: {
            DEFAULT: '#a5614b',
            light: '#d1a598',
          },
          orange: {
            DEFAULT: '#c38a65',
          },
          teal: {
            DEFAULT: '#cfe1e4',
            light: '#f1faf9',
          },
          beige: {
            DEFAULT: '#dec3ac',
          }
        }
      },
      fontFamily: {
        sans: ['EnterpriseRegular', 'sans-serif'],
        'sans-bold': ['EnterpriseBold', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
