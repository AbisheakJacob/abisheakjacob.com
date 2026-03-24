/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        safe: 'calc(enf(safe-area-insert-bottom) + 0.5rem)',
      },
    },
  },
  plugins: [],
}

