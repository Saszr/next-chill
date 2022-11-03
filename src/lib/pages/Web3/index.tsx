import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { useAccount } from '@web3modal/react';

import {
  UseAccount,
  UseDisconnect,
  UseNetwork,
  UseSwitchNetwork,
  UseBlockNumber,
  UseFeeData,
  UseBalance,
} from './sections';

const More = () => {
  return (
    <Flex direction={'row-reverse'}>
      <Link href={'https://web3modal.com/'} isExternal>
        <Text
          as="span"
          backgroundImage="linear-gradient(120deg, red, blue)"
          color="transparent"
          sx={{
            WebkitBackgroundClip: 'text',
          }}
        >
          More ...
        </Text>{' '}
        <ExternalLinkIcon mx="2px" />
      </Link>
    </Flex>
  );
};

export default function Web3() {
  const { account } = useAccount();

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent={'center'}
      mb={8}
      mt={1}
      minH="70vh"
    >
      {account.isConnected ? (
        <Flex direction="column" maxW="900px" w="full" gap={4} px={6}>
          <UseAccount />
          <UseDisconnect />
          <UseNetwork />
          <UseSwitchNetwork />
          <UseBlockNumber />
          <UseFeeData />
          <UseBalance />
          <More />
        </Flex>
      ) : (
        <Flex
          maxW="1000px"
          w="full"
          gap={4}
          justifyContent={'space-around'}
          alignItems={'center'}
          wrap={'wrap'}
          px={6}
        >
          <Box flex={1}>
            <Heading
              backgroundImage="linear-gradient(120deg, red, blue)"
              color="transparent"
              sx={{
                WebkitBackgroundClip: 'text',
              }}
            >
              @web3modal
            </Heading>
          </Box>

          <video autoPlay loop muted style={{ width: '600px', flex: 1 }}>
            <source src="https://web3modal.com/web3modal.mp4" type="video/mp4" />
          </video>
        </Flex>
      )}
    </Flex>
  );
}