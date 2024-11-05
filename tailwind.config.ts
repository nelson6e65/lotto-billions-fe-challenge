import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
  ],

  darkMode: [
    'variant',
    [
      // TODO: Implement manual toggle of color scheme in the code
      '@media (prefers-color-scheme: dark) { &:not(.light *) }',
      '&:is(.dark *)',
    ],
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        /// Colors steps generated at https://uicolors.app/create

        // Brand colors
        tangaroa: {
          '50': 'oklch(97.20% 0.02 222.16 / <alpha-value>)',
          '100': 'oklch(93.75% 0.04 223.95 / <alpha-value>)',
          '200': 'oklch(89.30% 0.07 223.21 / <alpha-value>)',
          '300': 'oklch(84.38% 0.11 220.16 / <alpha-value>)',
          '400': 'oklch(77.21% 0.15 229.56 / <alpha-value>)',
          '500': 'oklch(67.79% 0.18 247.35 / <alpha-value>)',
          '600': 'oklch(58.86% 0.23 258.78 / <alpha-value>)',
          '700': 'oklch(53.83% 0.26 262.38 / <alpha-value>)',
          '800': 'oklch(49.18% 0.24 262.71 / <alpha-value>)',
          '900': 'oklch(43.16% 0.18 260.86 / <alpha-value>)',
          '950': 'oklch(23.09% 0.08 257.38 / <alpha-value>)',

          // 950 #001b43 primary
          DEFAULT: 'oklch(23.09% 0.08 257.38 / <alpha-value>)',
        },

        'vivid-violet': {
          //
          '50': 'oklch(97.90% 0.01 316.49 / <alpha-value>)',
          '100': 'oklch(95.84% 0.02 320.99 / <alpha-value>)',
          '200': 'oklch(91.40% 0.04 321.03 / <alpha-value>)',
          '300': 'oklch(84.72% 0.08 322.59 / <alpha-value>)',
          '400': 'oklch(75.84% 0.12 323.82 / <alpha-value>)',
          '500': 'oklch(66.04% 0.16 324.07 / <alpha-value>)',
          '600': 'oklch(56.89% 0.17 325.10 / <alpha-value>)',
          '700': 'oklch(47.39% 0.14 326.02 / <alpha-value>)',
          '800': 'oklch(43.38% 0.13 326.32 / <alpha-value>)',
          '900': 'oklch(38.99% 0.10 327.33 / <alpha-value>)',
          '950': 'oklch(27.54% 0.09 326.71 / <alpha-value>)',

          // 700 #833986 secondary
          DEFAULT: 'oklch(47.39% 0.14 326.02deg / <alpha-value>)',
        },

        sunshade: {
          '50': 'oklch(97.72% 0.02 73.08 / <alpha-value>)',
          '100': 'oklch(93.65% 0.05 74.20 / <alpha-value>)',
          '200': 'oklch(87.07% 0.10 72.08 / <alpha-value>)',
          '300': 'oklch(79.11% 0.15 64.92 / <alpha-value>)',
          '400': 'oklch(74.92% 0.17 57.14 / <alpha-value>)',
          '500': 'oklch(68.38% 0.20 44.12 / <alpha-value>)',
          '600': 'oklch(59.80% 0.19 37.77 / <alpha-value>)',
          '700': 'oklch(50.69% 0.18 33.46 / <alpha-value>)',
          '800': 'oklch(43.51% 0.15 31.91 / <alpha-value>)',
          '900': 'oklch(38.17% 0.13 31.56 / <alpha-value>)',
          '950': 'oklch(25.65% 0.09 31.81 / <alpha-value>)',

          // 300 #fda440  tertiary
          DEFAULT: 'oklch(79.11% 0.15 64.92 / <alpha-value>)',
        },

        // Semantic colors
      },

      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
