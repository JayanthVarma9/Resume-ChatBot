import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          900: '#0B132B',
          700: '#1E3A8A',
          500: '#2563EB',
          400: '#38BDF8',
          300: '#67E8F9',
        },
      },
      boxShadow: {
        soft: '0 20px 40px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(6, 182, 212, 0.12), 0 24px 80px rgba(6, 182, 212, 0.12)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(6, 182, 212, 0.16), transparent 32%), radial-gradient(circle at 85% 10%, rgba(56, 189, 248, 0.14), transparent 28%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
