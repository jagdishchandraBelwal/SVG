/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fdf6',
          100: '#dcfce9',
          200: '#bbf7d4',
          300: '#86efb0',
          400: '#4ade80',
          500: '#0B6E4F',
          600: '#0a5c42',
          700: '#084C37',
          800: '#063d2c',
          900: '#042f22',
        },
        accent: {
          500: '#E85D04',
          600: '#d45303',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0,0,0,0.06)',
        'card': '0 8px 30px -4px rgba(0,0,0,0.08)',
      }
    },
  },
  plugins: [],
}
