import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MuiKeyboard } from '../src/components/MuiKeyboard';
import { russianButtons } from '../src/data/Keyboards';

describe('MuiKeyboard', () => {
  const mockSetInputValue = jest.fn();

  afterEach(() => {
    mockSetInputValue.mockClear();
  });

  test('renders without errors', () => {
    const { container } = render(
      <MuiKeyboard textField={<input />} slide={false} setInputValue={mockSetInputValue} />
    );
    expect(container).toBeInTheDocument();
  });

  test('calls setInputValue when a key is clicked', () => {
    const { getByText } = render(
      <MuiKeyboard
        textField={<input />}
        slide={false}
        setInputValue={mockSetInputValue}
        firstLanguage={russianButtons}
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
      <MuiKeyboard textField={<input />} slide={false} setInputValue={mockSetInputValue} />
    );
    const backspaceButton = getByTestId('BackspaceIcon');
    fireEvent.click(backspaceButton);
    expect(mockSetInputValue).toHaveBeenCalledWith(expect.any(Function));
  });
});
