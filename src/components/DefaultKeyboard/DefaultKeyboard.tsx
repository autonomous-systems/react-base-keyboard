import React, { useEffect, useState } from 'react';
import { DefaultKeyboardProps } from '../../types';
import { KeyboardButton } from '../KeyboardButton';
import { Backspace } from '../../icons/backspace';
import { Caps } from '../../icons/caps';
import { Enter, Reset, Space } from '../../icons';

export const DefaultKeyboard: React.FC<DefaultKeyboardProps> = ({
  setInputValue,
  className,
  numbers,
  letters,
  reverseButton,
  functionalButtonStyle,
  numberButtonStyle,
  textButtonStyle,
}) => {
  const [isCapsLockOn, setIsCapsLockOn] = useState(true);
  // const [language, setIsLanguage] = useState(true);
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

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setInputValue!((pr) => pr.slice(0, pr.length - 1));
    } else {
      setInputValue!((pr) => pr + key);
    }
    if (key === 'space') {
      setInputValue!((pr) => pr + '');
    }
    if (key === 'reverse') {
      setInputValue!(() => '');
    }
  };

  const handleButtonClick = (key: string) => {
    if (key === 'caps') {
      setIsCapsLockOn((pr) => !pr);
      return;
    }
    if (isCapsLockOn) {
      setIsCapsLockOn(false);
    }
    handleKeyPress(isCapsLockOn ? key.toUpperCase() : key);
  };

  const handleBackspaceClick = () => {
    handleKeyPress('backspace');
  };

  const handleSpaceClick = () => {
    handleKeyPress(' ');
  };

  const handleReverseClick = () => {
    handleKeyPress('reverse');
  };

  const handleEnterClick = () => {
    handleKeyPress('\n');
  };

  // const handleLanguageClick = (key: string) => {
  //   if (key === 'language') {
  //     setIsLanguage((pr) => !pr);
  //   }
  // };

  const handleLettersClick = (key: string) => {
    if (key === 'letters') {
      setIsLettersMode((prev) => !prev);
    }
  };

  return (
    <div className={`flex mt-2 justify-center ${className}`}>
      <div
        style={{ width: '800px' }}
        className="card bg-base-100 shadow-[0_5px_50px_-10px_rgba(0,0,0,0.3)]"
      >
        {!isLettersMode && numbers && (
          <>
            <div className="flex justify-end mt-1">
              <KeyboardButton
                buttonStyle={functionalButtonStyle?.backButtonStyle}
                onClick={handleBackspaceClick}
                label="backspace"
                icon={<Backspace className="w-8 h-8 ml-2" />}
              />
            </div>

            <div className="flex justify-center">
              <div className={`flex flex-wrap justify-center`}>
                {numbers &&
                  numbers.map((key) => (
                    <KeyboardButton
                      buttonStyle={numberButtonStyle}
                      key={key}
                      label={key}
                      onClick={() => handleButtonClick(key)}
                    />
                  ))}
              </div>
            </div>
          </>
        )}

        {isLettersMode && letters && (
          <>
            <div className="flex justify-end mt-1">
              <KeyboardButton
                buttonStyle={functionalButtonStyle?.backButtonStyle}
                onClick={handleBackspaceClick}
                label="backspace"
                icon={<Backspace className="w-8 h-8 ml-2" />}
              />
            </div>
            <div className="flex flex-wrap justify-center">
              {letters &&
                letters.map((key) => (
                  <KeyboardButton
                    buttonStyle={textButtonStyle}
                    key={key}
                    label={isCapsLockOn ? key.toUpperCase() : key}
                    onClick={() => handleButtonClick(key)}
                  />
                ))}
            </div>
          </>
        )}

        <div className="grid grid-cols-[repeat(12,1fr)] ml-1 mr-1">
          <div className="col-span-2 flex items-center">
            <KeyboardButton
              buttonStyle={functionalButtonStyle?.letterButtonStyle}
              label={isLettersMode ? '123' : 'ABC'}
              onClick={() => handleLettersClick('letters')}
            />

            <KeyboardButton
              onClick={() => handleButtonClick('caps')}
              buttonStyle={functionalButtonStyle?.capsButtonStyle}
              icon={
                <Caps className={`w-5 h-5 ${isCapsLockOn ? 'fill-success' : 'fill-indigo-800'}`} />
              }
            />
          </div>
          <div className="flex col-span-8 justify-center">
            <KeyboardButton
              buttonStyle={functionalButtonStyle?.spaceButtonStyle}
              onClick={handleSpaceClick}
              icon={<Space className="w-5 h-5 fill-indigo-800 mr-2" />}
            />
          </div>
          <div className="flex col-span-2 justify-end items-center">
            {reverseButton && (
              <KeyboardButton
                buttonStyle={functionalButtonStyle?.reverseButtonStyle}
                onClick={handleReverseClick}
                icon={<Reset className="w-5 h-5 fill-indigo-800" />}
              />
            )}
            <KeyboardButton
              buttonStyle={functionalButtonStyle?.enterButtonStyle}
              onClick={handleEnterClick}
              icon={<Enter className="w-5 h-5 fill-indigo-800" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
