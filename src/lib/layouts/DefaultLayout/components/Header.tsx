import { Flex, useColorModeValue } from '@chakra-ui/react';

import ThemeToggle from './ThemeToggle';

const Header = () => {
  const bg = useColorModeValue('#FFFFFF', '#1A202C');

  return (
    <Flex
      as="header"
      width="full"
      align="center"
      pos="sticky"
      top={0}
      bg={bg}
      py={3}
      px={5}
      zIndex="1"
    >
      <Flex marginLeft="auto" gap={10}>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
