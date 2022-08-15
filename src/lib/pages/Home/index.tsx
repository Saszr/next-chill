import { Flex, Button } from '@chakra-ui/react';
import NextLink from 'next/link';

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

      <NextLink href="/example" passHref>
        <Button size="sm">RTK Example</Button>
      </NextLink>
    </Flex>
  );
};

export default Home;
