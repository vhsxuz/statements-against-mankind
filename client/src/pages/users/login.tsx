import React, { useState } from 'react';
import { Button, Center, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = false;

  const login = () => {
    Axios.post('http://localhost:8000/api/v1/auth/login', {
      username: username,
      password: password,
    }).then((response) => {
      let token = response.data.userToken;
      localStorage.setItem("SavedToken", token);
      Axios.defaults.headers.common['Authorization'] = token;
      setLoginStatus(true)
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <Stack>
      <Center mt="20">
        <Heading size='lg'>Login</Heading>
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
        <Link to={loginStatus === true ? "/" : "/login"}>
          <Button colorScheme='teal' mt="4" onClick={login}>
            Login
          </Button>
        </Link>
      </FormControl>

    </Stack>
  );
}

export default Login;