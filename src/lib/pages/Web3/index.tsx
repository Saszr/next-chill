import { Flex, Grid, Text } from '@chakra-ui/react';

import { useAppSelector } from 'lib/hooks';

export default function Web3() {
  const { address, chainId } = useAppSelector((state) => state.web3);

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
      <Grid textAlign="center">
        {address ? (
          <>
            <Text fontSize="md" color="gray.500">
              {`chainId: ${chainId}`}
            </Text>
            <Text fontSize="md" color="gray.500">
              {`address: ${address}`}
            </Text>
          </>
        ) : (
          <Text fontSize="md" color="gray.500">
            not connect
          </Text>
        )}
      </Grid>
    </Flex>
  );
}
