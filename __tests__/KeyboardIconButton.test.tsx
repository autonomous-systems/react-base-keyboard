import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { KeyboardIconButton } from '../src/components/KeyboardIconButton';

describe('KeyboardIconButton', () => {
  test('renders without errors', () => {
    const { container } = render(<KeyboardIconButton />);
    expect(container).toBeInTheDocument();
  });

  test('calls onClick handler', () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<KeyboardIconButton onClick={onClickMock} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test('applies custom styles', () => {
    const { container } = render(<KeyboardIconButton sx={{ color: 'red' }} />);
    const button = container.querySelector('button');
    expect(button).toHaveStyle('color: red');
  });

  test('renders with children', () => {
    const { getByText } = render(<KeyboardIconButton>Icon</KeyboardIconButton>);
    const icon = getByText('Icon');
    expect(icon).toBeInTheDocument();
  });
});
