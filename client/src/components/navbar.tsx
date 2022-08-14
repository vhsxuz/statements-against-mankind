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
  let token = document.cookie.slice(6);
  const logout = () => {
    token = "";
    document.cookie = "token="
    console.log(token);
  }
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
        <Link to="/">
          <Button
            colorScheme='teal'
            size='sm'
            onClick={token === "" ? () => { } : logout}
          >
            {token === "" ? "Login" : "Logout"}
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
}

export default navbar;