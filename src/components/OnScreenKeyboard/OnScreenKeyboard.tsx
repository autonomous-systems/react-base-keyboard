import React, { useEffect, useState } from 'react';
import { KeyboardButton } from '../KeyboardButton/KeyboardButton';
import { KeyboardIconButton } from '../KeyboardIconButton/KeyboardIconButton';
import { Box, ButtonProps } from '@mui/material';
import {
  Backspace,
  KeyboardCapslock,
  SpaceBar,
  SettingsBackupRestore,
  KeyboardReturn,
  Language,
} from '@mui/icons-material';

interface OnScreenKeyboardProps {
  onKeyPress: (key: string) => void;
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

export const OnScreenKeyboard: React.FC<OnScreenKeyboardProps> = ({
  onKeyPress,
  numbers,
  firstLanguage,
  secondLanguage,
  secondLangLabel,
  firstLangLabel,
  keyboardWidth,
  buttonSize,
  labelButton,
  reverseButton,
}) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState(true);
  const [language, setIsLanguage] = useState(true);

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'caps') {
        setIsCapsLockOn((pr) => !pr);
      }
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const layout = language ? firstLanguage : secondLanguage;

  const handleButtonClick = (key: string) => {
    if (key === 'caps') {
      setIsCapsLockOn((pr) => !pr);
      return;
    }
    if (isCapsLockOn) {
      setIsCapsLockOn(false);
    }
    onKeyPress(isCapsLockOn ? key.toUpperCase() : key);
  };

  const handleBackspaceClick = () => {
    onKeyPress('backspace');
  };

  const handleSpaceClick = () => {
    onKeyPress(' ');
  };

  const handleReverseClick = () => {
    onKeyPress('reverse');
  };

  const handleEnterClick = () => {
    onKeyPress('\n');
  };

  const handleLanguageClick = (key: string) => {
    if (key === 'language') {
      setIsLanguage((pr) => !pr);
    }
  };

  return (
    <div style={{ width: keyboardWidth ? keyboardWidth : '900px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: numbers ? '' : 'end' }}>
        {numbers &&
          numbers.map((key) => (
            <KeyboardButton
              key={key}
              label={key}
              onClick={() => handleButtonClick(key)}
              variant="outlined"
            />
          ))}
        {numbers && <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />}
        {!numbers && <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {layout &&
          layout.map((key) => (
            <KeyboardButton
              key={key}
              label={isCapsLockOn ? key.toUpperCase() : key}
              onClick={() => handleButtonClick(key)}
              variant="outlined"
            />
          ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {labelButton && (
            <KeyboardButton
              label={
                language
                  ? `${secondLangLabel ? secondLangLabel : null}`
                  : `${firstLangLabel ? firstLangLabel : null}`
              }
              onClick={() => handleLanguageClick('language')}
              startIcon={<Language />}
            />
          )}
          <KeyboardIconButton
            onClick={() => handleButtonClick('caps')}
            color={isCapsLockOn ? 'success' : 'primary'}
            children={<KeyboardCapslock />}
          />
        </Box>

        <KeyboardButton
          onClick={handleSpaceClick}
          width="500px"
          variant="outlined"
          children={<SpaceBar />}
        />
        <Box>
          {reverseButton && (
            <KeyboardButton onClick={handleReverseClick} children={<SettingsBackupRestore />} />
          )}
          <KeyboardButton
            onClick={handleEnterClick}
            // variant="outlined"
            children={<KeyboardReturn />}
            // color={color}
            size={buttonSize}
          />
        </Box>
      </Box>
    </div>
  );
};
