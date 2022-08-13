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
import Axios from 'axios';
import Login from '../pages/users/login';

function navbar() {
  const logout = () => {
    let token = "";
    localStorage.setItem("SavedToken", token);
    Axios.defaults.headers.common['Authorization'] = token;
  }
  const currentToken = localStorage.getItem("SavedToken");
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
        <Link to={currentToken === "" ? "/login" : "/"}>
          <Button
            colorScheme='teal'
            size='sm'
            onClick={currentToken !== "" ? logout : () => { }}
          >
            {currentToken === "" ? "Login" : "Logout"}
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
}

export default navbar;