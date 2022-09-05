import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  components,
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
