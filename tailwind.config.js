/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#D9AB73',
        'line-color': '#8C5946',
      },
      backgroundImage: {
        'avatar' : "url(public/picrewme.png)"
      }
    },
  },
  plugins: [],
}