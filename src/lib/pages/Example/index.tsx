import { Flex, Text } from '@chakra-ui/react';

import { useGetUserListQuery } from 'lib/store/api/example.service';

const Example = () => {
  const { data: UserList } = useGetUserListQuery();

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
      {UserList &&
        UserList.map((user) => {
          return <Text key={user._id}>{user.email}</Text>;
        })}
    </Flex>
  );
};

export default Example;
