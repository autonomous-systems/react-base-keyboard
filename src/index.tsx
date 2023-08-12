import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { InputValueProvider } from './context';
import Textfield from './components/TextField';

ReactDOM.render(
  <InputValueProvider>
    <Textfield />
    <App />
  </InputValueProvider>,
  document.getElementById('root')
);
