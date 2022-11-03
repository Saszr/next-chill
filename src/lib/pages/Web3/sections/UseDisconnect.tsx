import { Button } from '@chakra-ui/react';
import { useDisconnect } from '@web3modal/react';

import Card from 'lib/containers/Card';

const UseDisconnect = () => {
  const disconnect = useDisconnect();

  return (
    <Card title="useDisconnect">
      <Button onClick={disconnect}>Disconnect</Button>
    </Card>
  );
};

export default UseDisconnect;
