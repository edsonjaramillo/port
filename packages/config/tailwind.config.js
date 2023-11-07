/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../../**/*.tsx'],
  theme: {
    colors: {
      background: { DEFAULT: '#0a0814', 900: '#100d21' },
      transparent: 'transparent',
      primary: {
        DEFAULT: '#26165c',
        50: '#f5f4fe',
        100: '#ecebfc',
        200: '#dbd9fb',
        300: '#c0bbf7',
        400: '#9f94f1',
        500: '#8068ea',
        600: '#6d48df',
        700: '#5d36cb',
        800: '#4e2daa',
        900: '#41268c',
        950: '#26165c',
      },
      secondary: {
        DEFAULT: '#cd3434',
        50: '#fdf3f3',
        100: '#fce4e4',
        200: '#facece',
        300: '#f5acac',
        400: '#ed7c7c',
        500: '#e15252',
        600: '#cd3434',
        700: '#ac2929',
        800: '#8f2525',
        900: '#772525',
        950: '#400f0f',
      },
      grayscale: {
        'neutral-light-accessible': 'hsl(0, 0%, 49%)',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      alert: {
        success: {
          DEFAULT: '#388e3c',
          accent: '#edffed',
        },
        error: {
          DEFAULT: '#d32f2f',
          accent: '#fff1f1',
        },
        warning: {
          DEFAULT: '#f57c00',
          accent: '#fffbea',
        },
        info: {
          DEFAULT: '#0288d1',
          accent: '#f0f7ff',
        },
      },
    },
    lineHeight: {
      9: '3.75rem',
      8: '2.5rem',
      7: '2.25rem',
      6: '1.875rem',
      5: '1.625rem',
      4: '1.5rem',
      3: '1.375rem',
      2: '1.125rem',
      1: '1rem',
    },
    letterSpacing: {
      9: '-0.025em',
      8: '-0.01em',
      7: '-0.0075em',
      6: '-0.00625em',
      5: '-0.005em',
      4: '-0.0025em',
      3: '0em',
      2: '0em',
      1: '0.0025em',
    },
    borderRadius: {
      DEFAULT: '0.35rem',
      none: '0',
      full: '5rem',
    },
    transitionDuration: {
      base: '350ms',
    },
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: ['var(--font-next)'],
      },
      minWidth: {
        '9/10': '90%',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fill, minmax(19rem, 1fr))',
      },
      gap: {
        form: '1.25rem',
      },
      // left to right infinite animation
      keyframes: {
        'forward-backward': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(0.25rem)' },
        },
      },
      animation: {
        'forward-backward': 'forward-backward 700ms ease-in-out infinite',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('tailwind-scrollbar')],
};
