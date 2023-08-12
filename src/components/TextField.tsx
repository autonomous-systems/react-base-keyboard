import React from 'react';
import { TextField } from '@mui/material';
import { useInputValue } from '../context';

const Textfield = () => {
  const { inputValue, setInputValue } = useInputValue();
  return <TextField value={inputValue} label="Click!"></TextField>;
};

export default Textfield;
