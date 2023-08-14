import React from 'react';
import { Grid, Box, Slide, ButtonProps, SlideProps } from '@mui/material';
import { OnScreenKeyboard } from '../OnScreenKeyboard';

interface MuiProps {
  textField?: React.ReactNode;
  slide?: boolean;
  direction?: SlideProps['direction'];
  checked?: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  numbers?: string[];
  firstLanguage: string[];
  secondLanguage?: string[];
  secondLangLabel?: string;
  firstLangLabel?: string;
  keyboardWidth?: string | number;
  buttonSize?: ButtonProps['size'];
  labelButton?: boolean;
  reverseButton?: boolean;
}

export const MuiKeyboard: React.FC<MuiProps> = ({
  textField,
  slide,
  direction,
  checked,
  setInputValue,
  numbers,
  firstLanguage,
  secondLanguage,
  secondLangLabel,
  firstLangLabel,
  keyboardWidth,
  buttonSize,
  labelButton,
  reverseButton,
}): JSX.Element => {
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
            {textField && (
              <Grid item xs={12} md={8}>
                {textField}
              </Grid>
            )}
            {slide && (
              <Slide direction={direction} in={checked} mountOnEnter unmountOnExit>
                <Box sx={{ display: 'flex', mt: '10px', justifyContent: 'center' }}>
                  <OnScreenKeyboard
                    onKeyPress={handleKeyPress}
                    numbers={numbers}
                    firstLanguage={firstLanguage}
                    secondLanguage={secondLanguage}
                    secondLangLabel={secondLangLabel}
                    firstLangLabel={firstLangLabel}
                    keyboardWidth={keyboardWidth}
                    buttonSize={buttonSize}
                  />
                </Box>
              </Slide>
            )}
            {!slide && (
              <OnScreenKeyboard
                onKeyPress={handleKeyPress}
                numbers={numbers}
                firstLanguage={firstLanguage}
                secondLanguage={secondLanguage}
                secondLangLabel={secondLangLabel}
                firstLangLabel={firstLangLabel}
                keyboardWidth={keyboardWidth}
                buttonSize={buttonSize}
                labelButton={labelButton}
                reverseButton={reverseButton}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
