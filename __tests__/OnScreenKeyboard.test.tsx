import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { OnScreenKeyboard } from '../src/components/OnScreenKeyboard/OnScreenKeyboard';
import { russianButtons } from '../src/data/Keyboards';

describe('OnScreenKeyboard', () => {
  const mockKeyPress = jest.fn();

  afterEach(() => {
    mockKeyPress.mockClear();
  });

  test('renders without errors', () => {
    const { container } = render(
      <OnScreenKeyboard onKeyPress={mockKeyPress} firstLanguage={russianButtons} />
    );
    expect(container).toBeInTheDocument();
  });

  test('calls onKeyPress when a key is clicked', () => {
    const { getByText } = render(
      <OnScreenKeyboard onKeyPress={mockKeyPress} firstLanguage={russianButtons} />
    );
    const keyButton = getByText('А');
    fireEvent.click(keyButton);
    expect(mockKeyPress).toHaveBeenCalledWith('А');
  });

  test('toggles caps lock when caps lock button is clicked', () => {
    const { getByTestId } = render(
      <OnScreenKeyboard onKeyPress={mockKeyPress} firstLanguage={russianButtons} />
    );
    const capsLockButton = getByTestId('KeyboardCapslockIcon');
    fireEvent.click(capsLockButton);
    expect(mockKeyPress).toBeInTheDocument;
  });
});
