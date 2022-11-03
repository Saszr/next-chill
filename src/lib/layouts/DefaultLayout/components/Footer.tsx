import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center" py={10}>
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} -{' '}
        <Link href="https://github.com/Saszr/next-chill" isExternal rel="noopener noreferrer">
          next-chill
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
