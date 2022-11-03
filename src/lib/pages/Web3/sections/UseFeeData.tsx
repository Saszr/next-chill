import { Button, Text } from '@chakra-ui/react';
import { useFeeData } from '@web3modal/react';

import Card from 'lib/containers/Card';

const UseDisconnect = () => {
  const { data, error, isLoading, refetch } = useFeeData({ watch: true });

  return (
    <Card title="useFeeData">
      <Text>FeeData Data: {isLoading ? 'Loading...' : JSON.stringify(data, null, 2)}</Text>
      <Text>Error: {error ? error.message : 'No Error'}</Text>
      <Button onClick={async () => refetch()}>Refetch</Button>
    </Card>
  );
};

export default UseDisconnect;
