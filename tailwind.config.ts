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
      '1.5xl': '1440px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans"', 'sans-serif'],
        suisse: ['SuisseIntl', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

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
