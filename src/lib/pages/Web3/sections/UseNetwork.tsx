import { Text } from '@chakra-ui/react';
import { useNetwork } from 'wagmi';

import Card from 'lib/containers/Card';

const UseNetwork = () => {
  const { chain, chains } = useNetwork();

  return (
    <Card title="useNetwork">
      <Text>Chain ID: {chain?.id}</Text>
      <Text>Selected Chain: {chain?.name}</Text>
      <Text>Configured Chains: {chains.map((c) => c.name).join(', ')}</Text>
    </Card>
  );
};

export default UseNetwork;
