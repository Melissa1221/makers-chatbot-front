/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            green: '#6DBEA5',
            dark: '#0F172A',
            blue: '#8596CA',
            purple: '#9333EA',
          },
          gradient: {
            purple: '#E6D0FB',
            green: '#E0F7FD',
          }
        },
        fontFamily: {
          'public-sans': ['"Public Sans"', 'sans-serif'],
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-morphing': 'linear-gradient(45deg, var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
          'gradient-y': 'gradient-y 15s ease infinite',
          'gradient-xy': 'gradient-xy 15s ease infinite',
          'morphing': 'morphing 10s ease infinite',
          'float': 'float 6s ease-in-out infinite',
          'shine': 'shine 1.5s ease-in-out infinite',
          'slide-up': 'slide-up 0.5s ease-out',
          'scale': 'scale 0.5s ease-out',
          'bounce-slow': 'bounce 3s ease-in-out infinite',
        },
        keyframes: {
          'gradient-y': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'center top'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'center center'
            }
          },
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          },
          'gradient-xy': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          },
          'morphing': {
            '0%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' },
            '50%': { 'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%' },
            '100%': { 'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%' }
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          'shine': {
            '0%': { backgroundPosition: '200% center' },
            '100%': { backgroundPosition: '-200% center' },
          },
          'slide-up': {
            '0%': { transform: 'translateY(100px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          'scale': {
            '0%': { transform: 'scale(0.8)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        backgroundSize: {
          'shine': '200% 100%',
        },
      },
    },
    plugins: [],
  }