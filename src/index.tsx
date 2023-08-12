import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { InputValueProvider } from './context/InputValueProvider';

ReactDOM.render(
  <InputValueProvider>
    <App />
  </InputValueProvider>,
  document.getElementById('root')
);
