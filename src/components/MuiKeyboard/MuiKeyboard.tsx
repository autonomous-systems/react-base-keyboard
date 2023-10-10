import React from 'react';
import { Box, Slide, ButtonProps, SlideProps } from '@mui/material';
import { OnScreenKeyboard } from '../OnScreenKeyboard';
import { SxProps } from '@mui/system';

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
  labelLangButton?: boolean;
  reverseButton?: boolean;
  singlyBack?: boolean;
  labelLetterButton?: boolean;
  sx?: SxProps;
  timeout?: SlideProps['timeout'];
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
  labelLangButton,
  reverseButton,
  singlyBack,
  labelLetterButton,
  sx,
  timeout,
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
      <Box sx={sx}>
        {textField}
        {slide && (
          <Slide direction={direction} in={checked} timeout={timeout} mountOnEnter unmountOnExit>
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
                labelLangButton={labelLangButton}
                reverseButton={reverseButton}
                singlyBack={singlyBack}
                labelLetterButton={labelLetterButton}
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
            labelLangButton={labelLangButton}
            reverseButton={reverseButton}
            singlyBack={singlyBack}
            labelLetterButton={labelLetterButton}
          />
        )}
      </Box>
    </>
  );
};
