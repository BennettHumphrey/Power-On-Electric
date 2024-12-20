/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm: '350px',
      xsm: '480px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1140px',
      'h-sm': { raw: '(max-height: 490px)' },
      'h-xs': { raw: '(max-height: 400px)' },
    },
    extend: {
      colors: {
        'main': '#e6e6e6',
        'company':'#4f65ac',
        'text':'#4d4d4d',
        'bubble':'#4d4d4de6',
        'footer':'#cccccc',
        'footer-text':'white'
      },
    },
  },
  plugins: [],
}

