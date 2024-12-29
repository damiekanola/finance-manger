/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#EAE9E3"
      },
      screens : {
        'max-767': {max: '768px'}
      }
    },
  },
  plugins: [],
}

