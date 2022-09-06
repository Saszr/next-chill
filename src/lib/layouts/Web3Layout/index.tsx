import type { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from './components/Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex direction="column" margin="0 auto" minH="full">
      <Header />
      <Flex flex="1" direction="column" justify="between">
        <Box as="main" flex="1">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
