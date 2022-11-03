import { Button, Text } from '@chakra-ui/react';
import { useBlockNumber } from '@web3modal/react';

import Card from 'lib/containers/Card';

const UseBlockNumber = () => {
  const { data, error, isLoading, refetch } = useBlockNumber({ watch: true });

  return (
    <Card title="useBlockNumber">
      <Text>BlockNumber: {isLoading ? 'Loading...' : data}</Text>
      <Text>Error: {error ? error.message : 'No Error'}</Text>
      <Button onClick={async () => refetch()}>Refetch</Button>
    </Card>
  );
};

export default UseBlockNumber;
