import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import ErrorPage from './pages/error-page';

function App() {
  return (
    <Router>
      <Stack>
        <Navbar />
      </Stack>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;