import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
