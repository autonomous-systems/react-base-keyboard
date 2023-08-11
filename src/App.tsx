import React from 'react';
import { MuiKeyboard } from './components/MuiKeyboard';
import { TextField } from '@mui/material';
import { numbers, russianButtons, englishButtons } from './data/Keyboards';

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const [inputValue, setInputValue] = React.useState<string>('');
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <MuiKeyboard
      textField={<TextField onClick={handleChange} value={inputValue} fullWidth multiline />}
      slide
      checked={checked}
      setInputValue={setInputValue}
      numbers={numbers}
      firstLanguage={russianButtons}
      secondLanguage={englishButtons}
      secondLangLabel="EN"
      firstLangLabel="RU"
      keyboardWidth={'900px'}
    />
  );
};

export default App;
