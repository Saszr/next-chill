import { Flex, Button, Box } from '@chakra-ui/react';
import NextLink from 'next/link';

import UserTable from './UserTable';
import LoginForm from './LoginForm';

const Example = () => {
  return (
    <Flex direction="column" alignItems="center" minHeight="70vh" gap={4} mb={8} w="full">
      <NextLink href="/" passHref>
        <Button size="sm"> Let&apos;s Head Back</Button>
      </NextLink>

      <LoginForm />

      <Box mt={10}>
        <UserTable />
      </Box>
    </Flex>
  );
};

export default Example;
