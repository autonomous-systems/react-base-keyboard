import React, { createContext, useContext, useState } from 'react';

interface InputValueContextProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputValueContext = createContext<InputValueContextProps | undefined>(undefined);

export const InputValueProvider: React.FC = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputValueContext.Provider>
  );
};

export const useInputValue = (): InputValueContextProps => {
  const context = useContext(InputValueContext);
  if (!context) {
    throw new Error('useInputValue must be used within an InputValueProvider');
  }
  return context;
};
