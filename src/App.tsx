import React, { ChangeEvent } from 'react';
import { MuiKeyboard } from './components/MuiKeyboard';
import { TextField } from '@mui/material';
import { numbers, russianButtons, englishButtons } from './data/Keyboards';
import { useInputValue } from './context';

const App = () => {
  const [checked, setChecked] = React.useState(false);
  // const [inputValue, setInputValue] = React.useState<string>('');
  const { inputValue, setInputValue } = useInputValue();
  const handleUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.persist();
    setInputValue(event.target.value);
  };
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    // <InputValueProvider>
    <MuiKeyboard
      // textField={
      // <TextField
      //   onChange={handleUrlChange}
      //   onClick={handleChange}
      //   value={inputValue}
      //   fullWidth
      //   multiline
      // />
      // }
      // slide={false}
      // direction="up"
      // checked={checked}
      setInputValue={setInputValue}
      numbers={numbers}
      firstLanguage={russianButtons}
      secondLanguage={englishButtons}
      secondLangLabel="EN"
      firstLangLabel="RU"
      keyboardWidth={'900px'}
    />
    // </InputValueProvider>
  );
};

export default App;
