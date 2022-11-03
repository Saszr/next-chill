import type { ReactNode } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';

interface CardProps {
  title?: string;
  children?: ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <Flex
      direction={'column'}
      borderRadius="8px"
      boxShadow={
        '0 0 0 1px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%)'
      }
      padding="24px"
      gap={4}
    >
      {title && <Heading fontSize={'2xl'}>{title}</Heading>}
      <Box flex={1}>{children}</Box>
    </Flex>
  );
};

export default Card;
