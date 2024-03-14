import React from 'react';
import { DefaultKeyboard } from '../components/index';
import { DefaultKeyboardProps } from '../types';

interface MuiKeyboardContextProps {
  inputValue: string;
  keyboardFeature: (options: { resetText?: boolean; openKeyboard?: boolean }) => void;
  keyBoard: React.ReactNode;
}

interface ContextProps extends DefaultKeyboardProps {
  children?: React.ReactNode;
  alwaysOpen?: boolean;
}

const MuiKeyboardContext = React.createContext<MuiKeyboardContextProps | undefined>(undefined);

export const MuiKeyboardProvider: React.FC<ContextProps> = ({
  alwaysOpen = false,
  className,
  children,
  numbers,
  letters,
  reverseButton,
  betweenButtons,
  numberButtonStyle,
  textButtonStyle,
  functionalButtonStyle,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [openKeyboard, setOpenKeyboard] = React.useState(false);
  const keyboardFeature = (options: { resetText?: boolean; openKeyboard?: boolean } = {}) => {
    const { resetText } = options;
    const { openKeyboard } = options;
    if (resetText) {
      setInputValue(() => '');
      return;
    }
    if (openKeyboard) {
      setOpenKeyboard(true);
      return;
    } else {
      setOpenKeyboard(false);
      return;
    }
  };

  const keyBoard = React.useMemo(() => {
    return (
      <>
        {openKeyboard && (
          <DefaultKeyboard
            className={className}
            setInputValue={setInputValue}
            numbers={numbers}
            letters={letters}
            reverseButton={reverseButton}
            betweenButtons={betweenButtons}
            numberButtonStyle={numberButtonStyle}
            textButtonStyle={textButtonStyle}
            functionalButtonStyle={functionalButtonStyle}
          />
        )}
        {alwaysOpen && (
          <DefaultKeyboard
            className={className}
            setInputValue={setInputValue}
            numbers={numbers}
            letters={letters}
            reverseButton={reverseButton}
            betweenButtons={betweenButtons}
            numberButtonStyle={numberButtonStyle}
            textButtonStyle={textButtonStyle}
            functionalButtonStyle={functionalButtonStyle}
          />
        )}
      </>
    );
  }, [openKeyboard]);

  const contextValue: MuiKeyboardContextProps = {
    inputValue,
    keyboardFeature,
    keyBoard,
  };

  return <MuiKeyboardContext.Provider value={contextValue}>{children}</MuiKeyboardContext.Provider>;
};

export const useMuiKeyboard = (): MuiKeyboardContextProps => {
  const context = React.useContext(MuiKeyboardContext);
  if (!context) {
    throw new Error('useMuiKeyboard must be used within an MuiKeyboardProvider');
  }
  return context;
};
