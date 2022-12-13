import type { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Header from './components/Header';
import Footer from 'lib/layouts/DefaultLayout/components/Footer';
import { WagmiConfigProvider } from 'lib/containers/Web3Modal';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <WagmiConfigProvider>
      <Flex direction="column" margin="0 auto" minH="full">
        <Header />
        <Flex flex="1" direction="column" justify="between">
          <Box as="main" flex="1">
            {children}
          </Box>
          <Footer />
        </Flex>
      </Flex>
    </WagmiConfigProvider>
  );
};

export default Layout;
