/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0A192F',
          card: '#112240',
          accent: '#64FFDA',
          text: '#CCD6F6',
          muted: '#8892B0',
          red: '#FF5370',
          purple: '#C792EA',
          border: 'rgba(100, 255, 218, 0.2)',
          hover: '#1D3557'
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
        sans: ['Inter', 'Outfit', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s infinite alternate',
        'radar': 'radar 4s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.4), 0 0 10px rgba(100, 255, 218, 0.2)' },
          '100%': { boxShadow: '0 0 15px rgba(100, 255, 218, 0.8), 0 0 25px rgba(100, 255, 218, 0.5)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      }
    },
  },
  plugins: [],
}
