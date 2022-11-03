import { Flex, useColorModeValue, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

import ThemeToggle from 'lib/layouts/DefaultLayout/components/ThemeToggle';
import WalletConnect from './WalletConnect';

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
      <Flex marginLeft="auto" gap={10} alignItems="center">
        <NextLink href="/" passHref>
          <Button variant="link">Home</Button>
        </NextLink>

        <NextLink href="/web3" passHref>
          <Button variant="link">Web3</Button>
        </NextLink>

        <WalletConnect />

        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Header;
