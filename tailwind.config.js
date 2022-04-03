const fontFamily = {
  headings: ['Raleway', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
};

const customColor = {
  /* Primary */
  main: 'hsl(218, 28%, 13%)',
  'intro-email': 'hsl(217, 28%, 15%)',
  footer: 'hsl(216, 53%, 9%)',
  testimonial: 'hsl(219, 30%, 18%)',
  'custom-cyan': 'hsl(176, 68%, 64%)',
  'custom-blue': 'hsl(198, 60%, 50%)',
  error: 'hsl(0, 100%, 63%)',
};

const customScreen = {
  xs: '370px',
};

const customBgSize = {
  'intro-desktop': '100vw 50%',
  'intro-mobile': '180vw calc(70% + 7rem)',
  'quotes-mobile': '1.5rem',
  'quotes-desktop': '2.5rem',
};

const customBgPosition = {
  'quotes-pos-mobile': 'top left 15px',
  'quotes-pos-desktop': 'top left 72px',
};

const customSpacing = {
  footer: '20vh',
};

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: fontFamily,
      colors: customColor,
      screens: customScreen,
      backgroundSize: customBgSize,
      backgroundPosition: customBgPosition,
      spacing: customSpacing,
    },
  },
  plugins: [],
};
