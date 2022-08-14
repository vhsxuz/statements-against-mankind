import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CookiesProvider } from "react-cookie";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#FFB3B3",
      900: "#C1EFFF",
    },
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <CookiesProvider>
    <ChakraProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChakraProvider>
  </CookiesProvider>
);
