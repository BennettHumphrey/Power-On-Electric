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
      xl: '1440px',
    },
    extend: {
      colors: {
        'main': '#e6e6e6',
        'accent':'#cccccc',
        'company':'#e6e6e6',
        'dark':'#999999',
        'dark-opacity':'#999999cc',
        'text':'#4d4d4d',
        'bubble':'#4d4d4de6',
        'link':'#000000',
        'footer':'#4bb3e3'
      },
    },
  },
  plugins: [],
}

