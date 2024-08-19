/* eslint-disable import/no-extraneous-dependencies */
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import twAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },

      boxShadow: {
        'soft-outline':
          '0px 0px 8px rgba(112, 144, 176, 0.12), 0px 8px 24px rgba(112, 144, 176, 0.24)',
        blur: 'blur(4px)',
        'soft-emboss':
          '-3px -3px 6px rgba(112, 144, 176, 0.08), 2px 2px 6px rgba(112, 144, 176, 0.16)',
        'neutral-modal':
          '0px 8px 24px 0px rgba(112, 144, 176, 0.28), 0px 0px 8px 0px rgba(112, 144, 176, 0.18)',
        'hover-glow':
          '0px 0px 8px 0px rgba(112, 144, 176, 0.18), 0px 8px 24px 0px  rgba(112, 144, 176, 0.28)',
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },

      spacing: {
        // margin 1
        m1X0: '1rem', // x0,
        m1X600: '1.25rem', // x600,
        m1X1920: '1.25rem', // x1920,

        // margin 2
        m2X0: '1.5rem', // x0,
        m2X600: '2rem', // x600,
        m2X1920: '2rem', // x1920,

        // margin 3
        m3X0: '2.5rem', // x0,
        m3X600: '7.5rem', // x600,
        m3X1920: '12.5rem', // x1920,

        // margin 4
        m4X0: '2.5rem', // x0,
        m4X600: '7.5rem', // x600,
        m4X1920: '12.5rem', // x1920,

        // gap 0
        g0X0: '0rem', // x0,
        g0X600: '0rem', // x600,
        g0X1920: '0rem', // x1920,

        // gap 1
        g1X0: '0.5rem', // x0,
        g1X600: '0.5rem', // x600,
        g1X1920: '0.5rem', // x1920,

        // gap 2
        g2X0: '0.75rem', // x0,
        g2X600: '0.75rem', // x600,
        g2X1920: '0.75rem', // x1920,

        // gap 3
        g3X0: '1rem', // x0,
        g3X600: '1.5rem', // x600,
        g3X1920: '1.5rem', // x1920,

        // gap 4
        g4X0: '2.5rem', // x0,
        g4X600: '2.5rem', // x600,
        g4X1920: '2.5rem', // x1920,

        // height 1 (icon size)
        h1X0: '1.5rem', // x0,
        h1X600: '1.5rem', // x600,
        h1X1920: '1.5rem', // x1920,

        // height 2 (arrow icon size)
        h2X0: '1.5rem', // x0
        h2X600: '1.75rem', // x600
        h2X1920: '1.75rem', // x1920

        // height 3 (video play button)
        h3X0: '1.5rem', // x0
        h3X600: '2.5rem', // x600
        h3X1920: '2.5rem', // x1920

        // height 4
        h4X0: '2rem', // x0
        h4X600: '3rem', // x600
        h4X1920: '3rem', // x1920

        // height 5 (button height)
        h5X0: '3rem', // x0
        h5X600: '3.5rem', // x600
        h5X1920: '3.5rem', // x1920

        // height 6 (logo height)
        h6X0: '3rem', // x0
        h6X600: '4rem', // x600
        h6X1920: '4rem', // x1920

        // height 7 (video play button base height)
        h7X0: '3rem', // x0
        h7X600: '5rem', // x600
        h7X1920: '5rem', // x1920

        // height 8 (menu height)
        h8X0: '5rem', // x0
        h8X600: '7.5rem', // x600
        h8X1920: '7.5rem', // x1920

        // height 9 (stage height)
        h9X0: '7.5rem', // x0
        h9x600: '12.5rem', // x600
        h9X1920: '12.5rem', // x1920

        // height 10 (feature card height)
        h10X0: '14.25rem', // x0
        h10X600: '16.75rem', // x600
        h10X1920: '16.75rem', // x1920
      },
      fontSize: {
        h1X0: [
          '2.5rem',
          {
            lineHeight: '3.25rem',
          },
        ],
        h1X600: [
          '4.5rem',
          {
            lineHeight: '5.5rem',
          },
        ],
        h1X1920: [
          '4.5rem',
          {
            lineHeight: '5.5rem',
          },
        ],
        h2X0: [
          '1.75rem',
          {
            lineHeight: '2.625rem',
          },
        ],
        h2X600: [
          '3rem',
          {
            lineHeight: '3.5rem',
          },
        ],
        h2X1920: [
          '3rem',
          {
            lineHeight: '3.5rem',
          },
        ],
        h3X0: [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        h3X600: [
          '2rem',
          {
            lineHeight: '2.5rem',
          },
        ],
        h3X1920: [
          '2rem',
          {
            lineHeight: '2.5rem',
          },
        ],
        h4X0: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        h4X600: [
          '1.75rem',
          {
            lineHeight: '2.25rem',
          },
        ],
        h4X1920: [
          '1.75rem',
          {
            lineHeight: '2.25rem',
          },
        ],
        bodyX0: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        bodyX600: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        bodyX1920: [
          '1.25rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        descriptionX0: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
          },
        ],
        descriptionX600: [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        descriptionX1920: [
          '1.5rem',
          {
            lineHeight: '2rem',
          },
        ],
        captionX0: [
          '0.6875rem',
          {
            lineHeight: '1rem',
          },
        ],
        captionX600: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        captionX1920: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
      },
    },
  },
  plugins: [twAnimate],
} satisfies Config;

export default config;
