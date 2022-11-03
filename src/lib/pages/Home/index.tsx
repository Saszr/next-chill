import { Flex } from '@chakra-ui/react';

import InViewRevealBox from 'lib/components/InViewRevealBox';
import { CTASection, SomeImage, SomeText } from './samples';

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
      <InViewRevealBox>
        <SomeText />
      </InViewRevealBox>

      <InViewRevealBox>
        <SomeImage />
      </InViewRevealBox>

      <InViewRevealBox>
        <CTASection />
      </InViewRevealBox>
    </Flex>
  );
};

export default Home;
