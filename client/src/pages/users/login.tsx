import React, { useState } from 'react';
import { Button, Center, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import Axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;

  const login = () => {
    Axios.post('http://localhost:8000/api/v1/auth/login', {
      username: username,
      password: password,
    }).then((response) => {
      let token = response.data.access;
      localStorage.setItem("SavedToken", 'Bearer ' + token);
      Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      setLoginStatus(true)
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <Stack>
      <Center mt="20">
        <Heading size='lg'>Login</Heading>
        <Heading> {loginStatus === false ? "false" : "true"}</Heading>
      </Center>
      <FormControl isRequired ps="56" pe="56" pt="8">
        <FormLabel>Username</FormLabel>
        <Input
          placeholder='Username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <FormLabel pt="4">Password</FormLabel>
        <Input
          type='password'
          placeholder='Password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button colorScheme='teal' mt="4" onClick={login}>
          Login
        </Button>
      </FormControl>

    </Stack>
  );
}

export default Login;