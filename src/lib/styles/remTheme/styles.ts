import { Styles, mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

export const styles: Styles = {
  global: (props: StyleFunctionProps) => ({
    'html, body, #__next': {
      width: '100%',
      height: '100%',
    },
    html: {
      fontSize: '6.9vw',
    },
    [`@media (max-width: 1024px)`]: {
      html: {
        fontSize: '13.02vw',
      },
    },
    [`@media (max-width: 480px)`]: {
      html: {
        fontSize: '26.67vw',
      },
    },
    body: {
      fontSize: '.16rem',
      bg: mode('white', '#000')(props),
    },
  }),
};
