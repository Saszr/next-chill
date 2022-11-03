import { Text } from '@chakra-ui/react';
import { useAccount } from '@web3modal/react';

import Card from 'lib/containers/Card';

const UseAccount = () => {
  const { account, isReady } = useAccount();

  return (
    <Card title="useAccount">
      <Text>Ready: {isReady.toString()}</Text>
      <Text>Connected: {account.isConnected ? 'Yes' : 'No'}</Text>
      <Text>Connector: {account.connector?.id}</Text>
      <Text>Address: {account.address}</Text>
    </Card>
  );
};

export default UseAccount;
