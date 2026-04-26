/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#19265c',
          light: '#2d3d7a',
          dark: '#0f1835',
        },
        cream: '#f7f4ef',
        gold: '#c9a45a',
      },
      fontFamily: {
        sans: ['Geologica', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-dot': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
