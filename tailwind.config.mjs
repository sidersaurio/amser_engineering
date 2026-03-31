/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        foreground: '#e0e0e0',
        primary: '#00f2ff',
        secondary: '#0051ff',
        accent: '#7000ff',
        card: 'rgba(255, 255, 255, 0.05)',
        'card-hover': 'rgba(255, 255, 255, 0.08)',
        muted: '#a0a0a0',
        'muted-foreground': '#b0b0b0',
        border: 'rgba(255, 255, 255, 0.05)',
        'footer-bg': '#050508',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'rotate': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
