import { Box, Button, Flex } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoLink = 'https://github.com/Saszr/next-chill';

const CTASection = () => {
  return (
    <Box textAlign="center">
      <Flex justifyContent="center" alignItems="center" gap={2}>
        <Button as="a" href={repoLink} target="_blank" leftIcon={<AiFillGithub />} size="sm">
          Open in Github
        </Button>
      </Flex>
    </Box>
  );
};

export default CTASection;
