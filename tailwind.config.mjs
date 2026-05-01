/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mochi: {
          bg: '#0d0d1a',
          card: '#1a1a2e',
          pink: '#FF6B9D',
          purple: '#C084FC',
          text: '#f4f4f8',
          muted: '#9ca3b4',
          face: '#FEF6E4',
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'mochi-gradient': 'linear-gradient(135deg, #FF6B9D 0%, #C084FC 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(255, 107, 157, 0.5)',
      },
      keyframes: {
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
      },
      animation: {
        blink: 'blink 5s infinite',
        float: 'float 4s ease-in-out infinite',
        sparkle: 'sparkle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
