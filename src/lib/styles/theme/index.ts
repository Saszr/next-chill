import { extendTheme } from '@chakra-ui/react';

import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  fonts,
  config,
  styles: {
    global: () => ({
      'html, body, #__next': {
        width: '100%',
        height: '100%',
      },
    }),
  },
});

export default customTheme;
