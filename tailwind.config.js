/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Concert One'],
        basic: ['Open Sans']
      },
      colors: {
        yellow: {
          medium: '#E8C300'
        },
        gray: {
          medium: '#e5e5e5',
          dark: '#333'
        }
      }
    }
  },
  plugins: []
}
