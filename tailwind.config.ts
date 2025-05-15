import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '460px',
      'md+': '940px',
      '1.5xl': '1440px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans"', 'sans-serif'],
        suisse: ['SuisseIntl', 'sans-serif'],
      },
      keyframes: {
        'text-gradient': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(-2deg) scale(1.3)' },
          '50%': { transform: ' translateX(8px) translateY(4px) rotate(2deg)' },
        },
      },
      animation: {
        'text-gradient': 'text-gradient 3s ease infinite',
        float: 'float 4s ease infinite',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        mainred: {
          DEFAULT: 'var(--mainred)',
        },
        maingray: {
          DEFAULT: 'var(--maingray-foreground)',
          foreground: 'var(--miangray-background)',
        },
        fierly: {
          DEFAULT: 'var(--fierly-foreground)',
          foreground: 'var(--fierly-background)',
        },

        'light-gray': {
          DEFAULT: 'var(--light-gray-foreground)',
          foreground: 'var(--light-gray-background)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
