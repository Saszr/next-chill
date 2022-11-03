import { Button, Menu, MenuButton, MenuList, MenuItem, Box, useColorMode } from '@chakra-ui/react';
import { useAccount, useConnectModal, useDisconnect } from '@web3modal/react';

import Web3Modal from 'lib/components/Web3Modal';

const Index = () => {
  const { colorMode } = useColorMode();

  const { account } = useAccount();
  const disconnect = useDisconnect();
  const { open } = useConnectModal();

  return (
    <Box>
      {account.isConnected ? (
        <Menu isLazy>
          <MenuButton as={Button} variant="outline" w="10rem" borderRadius={'full'}>
            <Box w="100%" noOfLines={1} lineHeight="tight" color="gray.500">
              {account.address && `${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
            </Box>
          </MenuButton>
          <MenuList color="gray.500">
            <MenuItem onClick={disconnect}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button variant="outline" onClick={open} color="gray.500" borderRadius={'full'}>
          Connect
        </Button>
      )}

      <Web3Modal theme={colorMode} />
    </Box>
  );
};

export default Index;
