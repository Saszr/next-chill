import { Text } from '@chakra-ui/react';
import { useNetwork } from '@web3modal/react';

import Card from 'lib/containers/Card';

const UseNetwork = () => {
  const { network } = useNetwork();

  return (
    <Card title="useNetwork">
      <Text>Chain ID: {network?.chain?.id}</Text>
      <Text>Selected Chain: {network?.chain?.name}</Text>
      <Text>Configured Chains: {network?.chains.map((c) => c.name).join(', ')}</Text>
    </Card>
  );
};

export default UseNetwork;
