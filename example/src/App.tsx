import React from 'react';
import { TextField } from '@mui/material';
import { useMuiKeyboard } from '../../src/context';

const App = () => {
  const { inputValue, slideEffect } = useMuiKeyboard();
  return (
    <TextField value={inputValue} onClick={slideEffect} label="Click!">
      Hello
    </TextField>
  );
};

export default App;
