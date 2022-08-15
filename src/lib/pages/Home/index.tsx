import { Flex } from '@chakra-ui/react';

import { CTASection, SomeImage, SomeText } from 'lib/components/samples';

const Home = () => {
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
      <SomeText />
      <SomeImage />
      <CTASection />
    </Flex>
  );
};

export default Home;
