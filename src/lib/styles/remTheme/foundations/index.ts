import breakpoints from './breakpoints';
import radii from './radius';
import sizes from './sizes';
import { spacing } from './spacing';
import typography from './typography';

export const foundations = {
  breakpoints,
  radii,
  ...typography,
  space: spacing,
  sizes,
};
