import { Flex, useColorMode } from '@chakra-ui/react';

import HelperImage from './HelperImage';

const SomeImage = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <HelperImage src={`/icons/nextjs-icon-${colorMode}.svg`} label="NextJS" />
      <HelperImage src="/icons/chakra-ui-logomark-colored.svg" label="Chakra UI" />
      <HelperImage src="/icons/ts-logo-512.svg" label="TypeScript" />
    </Flex>
  );
};

export default SomeImage;
