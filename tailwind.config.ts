import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        108: '32rem',
        navbar_open: '347px',
        navbar_close: '100px',
        base_open: 'calc(100vw - 694px)',
        base_close: 'calc(100vw - 447px)',
      },
      height: {
        108: '32rem',
        base: 'calc(100vh - 40px)',
      },
      boxShadow: {
        custom: '0 25px 100px -30px rgb(0 0 0 / 0.25);',
        inner: 'inset 0px 0px 200px 100px rgb(0,0,0,0.8);',
      },
      backgroundImage: {
        onboarding: "url('/assets/onboarding.png')",
      },
      backgroundColor: {
        backdrop: '#0000007f',
      },
      fontFamily: {
        primary: ['var(--inter-font)'],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      animation: {
        fade_third: 'fade 0.3s ease-in-out',
        fade_third_delay: 'fade 0.3s ease-in-out 0.5s',
        fade_half: 'fade 0.5s ease-in-out',
        fade_1: 'fade 1s ease-in-out',
        fade_2: 'fade 2s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
