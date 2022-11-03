import { Button, Text, Flex } from '@chakra-ui/react';
import { useNetwork, useSwitchNetwork } from '@web3modal/react';

import Card from 'lib/containers/Card';

const UseSwitchNetwork = () => {
  const { network } = useNetwork();
  const { error, isLoading, switchNetwork } = useSwitchNetwork();

  return (
    <Card title="useSwitchNetwork">
      <Text>Selected Chain: {isLoading ? 'Loading...' : network?.chain?.name}</Text>
      <Text>Error: {error ? error.message : 'No Error'}</Text>
      <Flex wrap={'wrap'} gap={2} mt={2}>
        {network?.chains.map((c) => (
          <Button key={c.id} onClick={async () => switchNetwork({ chainId: c.id })}>
            Switch to {c.name}
          </Button>
        ))}
      </Flex>
    </Card>
  );
};

export default UseSwitchNetwork;
