import { Grid, Heading, Text } from '@chakra-ui/react';

const SomeText = () => {
  return (
    <Grid textAlign="center">
      <Heading as="h1" size="lg">
        next-chill
      </Heading>

      <Text fontSize="xs" color="gray.500">
        This is a Next.js app with Chakra-UI / TypeScript / Redux Toolkit (include RTK Query) setup.
      </Text>
    </Grid>
  );
};

export default SomeText;
