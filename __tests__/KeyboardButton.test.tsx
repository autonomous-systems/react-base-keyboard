import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KeyboardButton } from '../src/components/KeyboardButton';

describe('KeyboardButton', () => {
  test('renders with label', () => {
    const { getByText } = render(<KeyboardButton label="Click Me" />);
    const button = getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<KeyboardButton label="Click Me" onClick={onClickMock} />);
    const button = getByText('Click Me');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('applies custom width', () => {
    const { container } = render(<KeyboardButton label="Custom Width" width="200px" />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle('width: 200px');
  });
});
