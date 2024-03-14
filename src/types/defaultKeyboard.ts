import React from 'react';
import { ButtonStyle } from './keyboardButton';

export interface DefaultKeyboardProps {
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
  numbers?: string[];
  letters: string[];
  reverseButton?: boolean;
  betweenButtons?: string | number;
  numberButtonStyle?: ButtonStyle;
  textButtonStyle: ButtonStyle;
  functionalButtonStyle?: {
    backButtonStyle?: ButtonStyle;
    spaceButtonStyle?: ButtonStyle;
    capsButtonStyle?: ButtonStyle;
    langButtonStyle?: ButtonStyle;
    letterButtonStyle?: ButtonStyle;
    reverseButtonStyle?: ButtonStyle;
    enterButtonStyle?: ButtonStyle;
  };
}
