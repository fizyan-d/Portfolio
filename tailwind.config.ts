import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pitch: '#050505',
        border: '#1F2937',
        neon: '#00FF66',
        cyber: '#A855F7',
        surface: '#09090b',
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'sans-serif'],
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      keyframes: {
        lf: {
          '0%': { left: '200%' },
          '100%': { left: '-200%' },
        },
        speeder: {
          '0%': { transform: 'translate(-50%, -50%) translate(2px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-50%, -50%) translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-50%, -50%) translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(-50%, -50%) translate(0px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(-50%, -50%) translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-50%, -50%) translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-50%, -50%) translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(-50%, -50%) translate(2px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-50%, -50%) translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(-50%, -50%) translate(2px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(-50%, -50%) translate(1px, -2px) rotate(-1deg)' },
        },
        fazer: {
          '0%': { left: '0' },
          '100%': { left: '-80px', opacity: '0' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: '#1F2937' },
          '50%': { borderColor: '#00FF66' },
        },
      },
      animation: {
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
