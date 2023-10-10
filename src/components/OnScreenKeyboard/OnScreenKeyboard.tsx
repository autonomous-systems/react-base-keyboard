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
  labelLangButton?: boolean;
  reverseButton?: boolean;
  singlyBack?: boolean;
  labelLetterButton?: boolean;
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
  labelLangButton,
  reverseButton,
  singlyBack,
  labelLetterButton,
}) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState(true);
  const [language, setIsLanguage] = useState(true);
  const [isLettersMode, setIsLettersMode] = useState(true);

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

  const handleLettersClick = (key: string) => {
    if (key === 'letters') {
      setIsLettersMode((prev) => !prev);
    }
  };

  return (
    <div style={{ width: keyboardWidth ? keyboardWidth : '900px' }}>
      {labelLetterButton ? (
        <>
          {!isLettersMode && (
            <>
              {numbers && singlyBack && (
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                  <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />
                </Box>
              )}
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
                {numbers && !singlyBack && (
                  <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />
                )}
                {!numbers && (
                  <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />
                )}
              </Box>
            </>
          )}
        </>
      ) : (
        <>
          {numbers && singlyBack && (
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
              <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: numbers ? '' : 'end',
            }}
          >
            {numbers &&
              numbers.map((key) => (
                <KeyboardButton
                  key={key}
                  label={key}
                  onClick={() => handleButtonClick(key)}
                  variant="outlined"
                />
              ))}
            {numbers && !singlyBack && (
              <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />
            )}
            {!numbers && <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />}
          </Box>{' '}
        </>
      )}
      {labelLetterButton ? (
        <>
          {isLettersMode && (
            <>
              <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <KeyboardButton onClick={handleBackspaceClick} children={<Backspace />} />
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
            </>
          )}
        </>
      ) : (
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
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          {labelLangButton && (
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
          {labelLetterButton && (
            <KeyboardButton
              label={isLettersMode ? '123' : 'ABC'}
              onClick={() => handleLettersClick('letters')}
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
