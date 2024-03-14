import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DefaultKeyboard } from '../src/components/DefaultKeyboard';
import { russianLetters } from '../src/data/Keyboards';

describe('MuiKeyboard', () => {
  const mockSetInputValue = jest.fn();

  afterEach(() => {
    mockSetInputValue.mockClear();
  });

  test('renders without errors', () => {
    const { container } = render(
      <DefaultKeyboard
         textButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70 shadow-md',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-16',
    }}
     numberButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-20',
    }}
        
        setInputValue={mockSetInputValue}
        letters={russianLetters}
      />
    );
    expect(container).toBeInTheDocument();
  });

  test('calls setInputValue when a key is clicked', () => {
    const { getByText } = render(
      <DefaultKeyboard
        textButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70 shadow-md',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-16',
    }}
     numberButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-20',
    }}
        setInputValue={mockSetInputValue}
        letters={russianLetters}
      />
    );
    const keyButton = getByText('А');
    fireEvent.click(keyButton);
    expect(mockSetInputValue).toHaveBeenCalledWith(expect.any(Function));
    const callback = mockSetInputValue.mock.calls[0][0];
    expect(callback('')).toBe('А');
  });

  test('calls setInputValue with backspace key', () => {
    const { getByTestId } = render(
      <DefaultKeyboard
         textButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70 shadow-md',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-16',
    }}
     numberButtonStyle={{
      bgColor: 'bg-slate-100 hover:bg-indigo-300',
      borderStyle: 'btn-outline border-indigo-800/70',
      textStyle: 'text-indigo-900 text-xl',
      layout: 'm-1 w-20',
    }}
        setInputValue={mockSetInputValue}
        letters={russianLetters}
      />
    );
    const backspaceButton = getByTestId('BackspaceIcon');
    fireEvent.click(backspaceButton);
    expect(mockSetInputValue).toHaveBeenCalledWith(expect.any(Function));
  });
});
