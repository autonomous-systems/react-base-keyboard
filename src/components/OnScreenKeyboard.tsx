import React, { useEffect, useState } from 'react';
import KeyboardButton from './KeyboardButton';
import { Box } from '@mui/material';

interface OnScreenKeyboardProps {
  onKeyPress: (key: string) => void;
}

const OnScreenKeyboard: React.FC<OnScreenKeyboardProps> = ({ onKeyPress }) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState(true);
  const numbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const buttons: string[] = [
    '-',
    'й',
    'ц',
    'у',
    'к',
    'е',
    'н',
    'г',
    'ш',
    'щ',
    'з',
    'х',
    'ъ',
    'ф',
    'ы',
    'в',
    'а',
    'п',
    'р',
    'о',
    'л',
    'д',
    'ж',
    'э',
    'я',
    'ч',
    'с',
    'м',
    'и',
    'т',
    'ь',
    'б',
    'ю',
    '.',
  ];

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

  return (
    <div style={{ width: '800px' }}>
      {numbers.map((key) => (
        <KeyboardButton
          key={key}
          label={key}
          onClick={() => handleButtonClick(key)}
          variant='outlined'
        />
      ))}
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {buttons.map((key) => (
          <KeyboardButton
            key={key}
            label={isCapsLockOn ? key.toUpperCase() : key}
            onClick={() => handleButtonClick(key)}
            variant='outlined'
          />
        ))}
      </Box>
      <KeyboardButton
        label='caps'
        onClick={() => handleButtonClick('caps')}
        variant={isCapsLockOn ? 'contained' : 'outlined'}
        color={isCapsLockOn ? 'success' : 'primary'}
      />
      <KeyboardButton
        label='space'
        onClick={handleSpaceClick}
        width='500px'
        variant='outlined'
      />
      <KeyboardButton
        label='backspace'
        onClick={handleBackspaceClick}
        variant='outlined'
      />
      <KeyboardButton
        label='reverse'
        onClick={handleReverseClick}
        variant='outlined'
      />
      <KeyboardButton
        label='enter'
        onClick={handleEnterClick}
        variant='outlined'
      />
    </div>
  );
};

export default OnScreenKeyboard;
