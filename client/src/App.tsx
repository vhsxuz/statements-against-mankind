import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Route from './routes/route';


function App() {
  return (
    <Router>
      <Stack>
        <Navbar />
      </Stack>
      <Route />
    </Router>
  );
}

export default App;