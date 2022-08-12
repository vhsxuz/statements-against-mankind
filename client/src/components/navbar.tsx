import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

function navbar() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' m='4'>
      <Box p='2'>
        <Heading size='md'>Statement Against Mankind</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Button colorScheme='teal' size='sm'>Sign Up</Button>
        <Button colorScheme='teal' size='sm'>Log in</Button>
      </ButtonGroup>
    </Flex>
  );
}

export default navbar;