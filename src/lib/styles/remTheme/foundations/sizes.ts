import { spacing } from './spacing';

const largeSizes = {
  max: 'max-content',
  min: 'min-content',
  full: '100%',
  '3xs': '2.24rem',
  '2xs': '2.56rem',
  xs: '3.20rem',
  sm: '3.84rem',
  md: '4.48rem',
  lg: '5.12rem',
  xl: '5.76rem',
  '2xl': '6.72rem',
  '3xl': '7.68rem',
  '4xl': '8.96rem',
  '5xl': '10.24rem',
  '6xl': '11.52rem',
  '7xl': '12.80rem',
  '8xl': '14.40rem',
  prose: '60ch',
};

const sizes = {
  ...spacing,
  ...largeSizes,
};

export default sizes;
