import { Button, Text } from '@chakra-ui/react';
import { useAccount, useBalance } from 'wagmi';

import Card from 'lib/containers/Card';

const UseBalance = () => {
  const account = useAccount();
  const { data, error, isLoading, refetch } = useBalance({
    address: account.address,
  });

  return (
    <Card title="useBalance">
      <Text>Balance Data: {isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}</Text>
      <Text>Error: {error ? error.message : 'No Error'}</Text>
      <Button onClick={async () => refetch()}>Refetch</Button>
    </Card>
  );
};

export default UseBalance;
