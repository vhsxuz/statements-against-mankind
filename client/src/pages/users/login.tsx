import React from 'react';
import { Button, Center, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';

function login() {
  return (
    <Stack>
      <Center mt="20">
        <Heading size='lg'>Login</Heading>
      </Center>
      <FormControl isRequired ps="56" pe="56" pt="8">
        <FormLabel>Username</FormLabel>
        <Input placeholder='Username' />
        <FormLabel pt="4">Password</FormLabel>
        <Input type='password' placeholder='Password' />
        <Button colorScheme='teal' mt="4">
          Login
        </Button>
      </FormControl>
    </Stack>
  );
}

export default login;