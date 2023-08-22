import React, { createContext, useContext, useState } from 'react';
import { MuiKeyboard } from '../components';
import { ButtonProps, SlideProps } from '@mui/material';
import { SxProps } from '@mui/system';

interface MuiKeyboardContextProps {
  inputValue: string;
  keyboardFeature: (options: { resetText?: boolean; slideEffect?: boolean }) => void;
}

interface ContextProps {
  children?: React.ReactNode;
  textField?: React.ReactNode;
  slide?: boolean;
  direction?: SlideProps['direction'];
  checked?: boolean;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  numbers?: string[];
  firstLanguage: string[];
  secondLanguage?: string[];
  secondLangLabel?: string;
  firstLangLabel?: string;
  keyboardWidth?: string | number;
  buttonSize?: ButtonProps['size'];
  labelLangButton?: boolean;
  reverseButton?: boolean;
  sx?: SxProps;
}

const MuiKeyboardContext = createContext<MuiKeyboardContextProps | undefined>(undefined);

export const MuiKeyboardProvider: React.FC<ContextProps> = ({
  children,
  textField,
  slide = true,
  direction = 'up',
  numbers,
  firstLanguage,
  secondLanguage,
  secondLangLabel,
  firstLangLabel,
  keyboardWidth,
  buttonSize,
  labelLangButton,
  reverseButton,
  sx,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const keyboardFeature = (options: { resetText?: boolean; slideEffect?: boolean } = {}) => {
    const { resetText, slideEffect } = options;
    if (resetText) {
      setInputValue(() => '');
      return;
    }
    if (slideEffect) {
      setChecked((pr) => !pr);
    } else {
      setChecked(false);
    }
  };

  return (
    <MuiKeyboardContext.Provider value={{ inputValue, keyboardFeature }}>
      {children}
      <MuiKeyboard
        setInputValue={setInputValue}
        textField={textField}
        slide={slide}
        direction={direction}
        checked={checked}
        numbers={numbers}
        firstLanguage={firstLanguage}
        secondLanguage={secondLanguage}
        secondLangLabel={secondLangLabel}
        firstLangLabel={firstLangLabel}
        keyboardWidth={keyboardWidth}
        buttonSize={buttonSize}
        labelLangButton={labelLangButton}
        reverseButton={reverseButton}
        sx={sx}
      />
    </MuiKeyboardContext.Provider>
  );
};

export const useMuiKeyboard = (): MuiKeyboardContextProps => {
  const context = useContext(MuiKeyboardContext);
  if (!context) {
    throw new Error('useInputValue must be used within an InputValueProvider');
  }
  return context;
};
