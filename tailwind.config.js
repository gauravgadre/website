/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, rgba(245,245,245,1) 0%, rgba(200,200,200,1) 97%)',
      }
    }
  },
  plugins: [],
}
