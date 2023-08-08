import React, { useEffect, useState } from 'react';
import KeyboardButton from './KeyboardButton';
import KeyboardIconButton from './KeyboardIconButton';
import { numbers, russianButtons, englishButtons } from 'src/data/keyboards';
import { Box } from '@mui/material';
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
}

const OnScreenKeyboard: React.FC<OnScreenKeyboardProps> = ({ onKeyPress }) => {
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

  const layout = language ? russianButtons : englishButtons;

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
    <div style={{ width: '900px' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <KeyboardButton
          size="medium"
          onClick={handleReverseClick}
          children={<SettingsBackupRestore />}
        />
        {numbers.map((key) => (
          <KeyboardButton
            key={key}
            label={key}
            onClick={() => handleButtonClick(key)}
            variant="outlined"
          />
        ))}
        <KeyboardButton size="medium" onClick={handleBackspaceClick} children={<Backspace />} />
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {layout.map((key) => (
          <KeyboardButton
            key={key}
            label={isCapsLockOn ? key.toUpperCase() : key}
            onClick={() => handleButtonClick(key)}
            variant="outlined"
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <KeyboardButton
          label={language ? 'RU' : 'EN'}
          onClick={() => handleLanguageClick('language')}
          startIcon={<Language />}
        />
        {/* <KeyboardButton
        label="caps"
        onClick={() => handleButtonClick('caps')}
        variant={isCapsLockOn ? 'contained' : 'outlined'}
        color={isCapsLockOn ? 'success' : 'primary'}
      /> */}
        <KeyboardIconButton
          onClick={() => handleButtonClick('caps')}
          color={isCapsLockOn ? 'success' : 'primary'}
          children={<KeyboardCapslock />}
        />

        <KeyboardButton
          onClick={handleSpaceClick}
          width="500px"
          variant="outlined"
          startIcon={<SpaceBar />}
        />
        <KeyboardButton
          onClick={handleEnterClick}
          // variant="outlined"
          children={<KeyboardReturn />}
          color="primary"
        />
      </Box>
    </div>
  );
};

export default OnScreenKeyboard;
