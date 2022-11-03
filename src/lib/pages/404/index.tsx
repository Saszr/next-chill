import { Heading, Image, Flex, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

import MotionBox from 'lib/components/MotionBox';

const Page404 = () => {
  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
        w="100%"
        maxW="900px"
        margin="0 auto"
      >
        <Image src="/images/404 Error-pana.svg" alt="Error 404 not found Illustration" />
      </MotionBox>

      <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={4}>
        <Heading size="lg">Page not Found.</Heading>

        <Link href="/" passHref>
          <ChakraLink isExternal rel="noopener noreferrer" color="gray">
            Let's Head Back
          </ChakraLink>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Page404;
