import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Station 33 Brand Colors
        station: {
          orange: '#FF6B35',
          coral: '#FF8555',
          cream: '#FFB347',
          charcoal: '#2F2F2F',
          brick: '#A64B2A',
          beige: '#F4E8D8',
          green: '#3A5F5A',
          blue: '#5BA7C4',
          gold: '#F4B942',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, "Manrope")', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, "Cormorant Garamond")', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, "Cormorant Garamond")', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
