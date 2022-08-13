import { Center, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

function errorPage() {
  return (
    <Stack>
      <Center mt="48">
        <Heading> Error 404</Heading>
      </Center>
      <Center>
        <Heading>Page Not Found</Heading>
      </Center>
    </Stack >
  );
}

export default errorPage;