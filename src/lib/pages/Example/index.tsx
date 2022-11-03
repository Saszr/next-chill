import { Flex } from '@chakra-ui/react';

import { RTKQuery } from './sections';

const Example = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <RTKQuery />
    </Flex>
  );
};

export default Example;
