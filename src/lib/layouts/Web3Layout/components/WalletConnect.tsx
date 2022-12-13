import { Button, Box, useColorMode } from '@chakra-ui/react';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount } from 'wagmi';

import { DefaultWeb3Modal } from 'lib/containers/Web3Modal';

const Index = () => {
  const { colorMode } = useColorMode();
  const account = useAccount();
  const { open } = useWeb3Modal();

  return (
    <Box>
      {account.isConnected ? (
        <Button variant="outline" onClick={() => open()} color="gray.500" borderRadius={'full'}>
          {account.address && `${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
        </Button>
      ) : (
        <Button variant="outline" onClick={() => open()} color="gray.500" borderRadius={'full'}>
          Connect
        </Button>
      )}

      <DefaultWeb3Modal theme={colorMode} />
    </Box>
  );
};

export default Index;
