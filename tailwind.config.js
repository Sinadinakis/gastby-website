// Helping Function
const em = px => `${px / 16}em`;
const rem = px => ({ [px]: `${px / 16}rem` });
const remValue = px => `${px / 16}rem`;

// Overwrite/disable default styles
module.exports = {
  important: false,
  theme: {
    fontFamily: {
      'pt-sans': 'La Belle Aurore, PT Sans, sans-serif',
      'open-sans': 'Open Sans, sans-serif',
      nunito: 'Nunito Sans, sans-serif',
      garamond: 'EB Garamond, Nunito Sans, san-serif'
    },
    filter: { 
      'none': 'none',
      'grayscale': 'grayscale(100%)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1/2': '50%',
      40: '40%',
      100: '100%'
    },
    /*
     * Here is where you define your screen sizes, 'd' is for down
     * Class name: {size}: classes you want to apply
     */
    screens: {
      tyd: { max: em(399) },
      ty: em(400),
      xsd: { max: em(599) },
      xs: em(600),
      smd: { max: em(767) },
      sm: em(768),
      mdd: { max: em(959) },
      md: em(960),
      lgd: { max: em(1023) },
      lg: em(1024),
      xld: { max: em(1279) },
      xl: em(1280),
    },
    boxShadow: {
      xs: '0 0 2px 0 rgba(0, 0, 0, 0.05)',
      sm: '0 0 5px 0 rgba(30, 30, 30, 0.08)',
      default: '0 0 7px 0 rgba(30, 30, 30, 0.08)',
      tile: '0 1px 0 2px rgba(210, 210, 210, 0.6)',
      md: '0 0 10px 0 rgba(30, 30, 30, 0.08)',
      lg: '0 0 15px 0 rgba(30, 30, 30, 0.08)',
      xl: '0 0 25px 0 rgba(30, 30, 30, 0.08)',
      menu: '0 1px 0 0 rgba(155, 155, 155, 0.1)',
      none: 'none',
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      half: '0 0 50%',
      none: 'none',
      '2': '2 2 0%',
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'first', 'last'],
    borderWidth: ['responsive', 'hover', 'first', 'last'],
  },
  corePlugins: {
    fonts: false,
    // backgroundSize: false,
    // borderCollapse: false,
    // leading: false,
    // lists: false,
    // maxHeight: false,
    // minHeight: false,
    // objectFit: false,
    // stroke: false,
    // tableLayout: false,
    // textColors: false,
    // textSizes: false,
    // textStyle: false,
    // whitespace: false,
  },
  purge: [
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  variants: {
    filter: ['responsive', 'hover'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
