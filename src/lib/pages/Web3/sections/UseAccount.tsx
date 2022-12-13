import { Text } from '@chakra-ui/react';
import { useAccount } from 'wagmi';

import Card from 'lib/containers/Card';

const UseAccount = () => {
  const account = useAccount();

  return (
    <Card title="useAccount">
      <Text>Connected: {account.isConnected ? 'Yes' : 'No'}</Text>
      <Text>Connector: {account.connector?.id}</Text>
      <Text>Address: {account.address}</Text>
    </Card>
  );
};

export default UseAccount;
