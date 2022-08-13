import React from 'react';
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' m='4'>
      <Box p='2'>
        <Heading size='md'>Statement Against Mankind</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='2'>
        <Link to='/register'>
          <Button colorScheme='teal' size='sm'>Sign Up</Button>
        </Link>
        <Link to='/login'>
          <Button colorScheme='teal' size='sm'>Log in</Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
}

export default navbar;