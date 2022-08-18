import React, { useState } from 'react';
import { Button, Center, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";

function Register() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const navigate = useNavigate();

  Axios.defaults.withCredentials = false;

  const register = async (e: any) => {
    e.preventDefault();
    await Axios.post("http://localhost:8000/api/v1/auth/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Stack>
      <Center mt="20">
        <Heading size='lg'>Sign Up</Heading>
      </Center>
      <FormControl isRequired ps="56" pe="56" pt="8">
        <FormLabel>Username</FormLabel>
        <Input
          placeholder='Username'
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <FormLabel pt="4">Password</FormLabel>
        <Input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <Link to="/">
          <Button colorScheme='teal' mt="4" onClick={register}>
            Sign Up
          </Button>
        </Link>
      </FormControl>
    </Stack>
  );
}

export default Register;