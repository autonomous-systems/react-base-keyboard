import React, { ChangeEvent, useState } from 'react';
import { Grid, Box, Slide, TextField, ButtonProps } from '@mui/material';
import { OnScreenKeyboard } from '../OnScreenKeyboard';

interface MuiProps {
  textField: React.ReactNode;
  slide: boolean;
  checked: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  numbers: string[];
  firstLanguage: string[];
  secondLanguage: string[];
  secondLangLabel: string;
  firstLangLabel: string;
  keyboardWidth: string | number;
}

export const MuiKeyboard: React.FC<MuiProps> = ({
  textField,
  slide,
  checked,
  setInputValue,
  numbers,
  firstLanguage,
  secondLanguage,
  secondLangLabel,
  firstLangLabel,
  keyboardWidth,
}): JSX.Element => {
  // const [inputValue, setInputValue] = useState<string>('');

  // const handleUrlChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   event.persist();
  //   setInputValue(event.target.value);
  // };

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setInputValue((pr) => pr.slice(0, pr.length - 1));
    } else {
      setInputValue((pr) => pr + key);
    }
    if (key === 'space') {
      setInputValue((pr) => pr + '');
    }
    if (key === 'reverse') {
      setInputValue(() => '');
    }
  };

  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };
  return (
    <>
      <Grid
        sx={{
          paddingRight: 4,
          width: '100%',
          marginLeft: 0,
          pt: 50,
        }}
        container
        justifyContent="center"
        direction="column"
        spacing={4}
      >
        <Grid
          item
          xs={11}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid container spacing={4} justifyContent="center" direction="row" rowSpacing={1}>
            <Grid item xs={12} md={8}>
              {/* <TextField
                onChange={handleUrlChange}
                placeholder="Click!"
                value={inputValue}
                variant="outlined"
                fullWidth
                multiline
                onClick={handleChange}
              /> */}
              {textField}
            </Grid>
            {slide ? (
              <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Box sx={{ display: 'flex', mt: '10px', justifyContent: 'center' }}>
                  <OnScreenKeyboard
                    onKeyPress={handleKeyPress}
                    numbers={numbers}
                    firstLanguage={firstLanguage}
                    secondLanguage={secondLanguage}
                    secondLangLabel={secondLangLabel}
                    firstLangLabel={firstLangLabel}
                    keyboardWidth={keyboardWidth}
                  />
                </Box>
              </Slide>
            ) : (
              <OnScreenKeyboard
                onKeyPress={handleKeyPress}
                numbers={numbers}
                firstLanguage={firstLanguage}
                secondLanguage={secondLanguage}
                secondLangLabel={secondLangLabel}
                firstLangLabel={firstLangLabel}
                keyboardWidth={keyboardWidth}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
