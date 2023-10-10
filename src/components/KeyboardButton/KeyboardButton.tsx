import React from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

interface KeyboardButtonProps extends ButtonProps {
  label?: string;
  margin?: string | number;
  width?: string;
  onClick?: () => void;
}

export const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  label,
  onClick,
  margin,
  width,
  size,
  color,
  disabled,
  fullWidth,
  variant,
  startIcon,
  children,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={startIcon}
      sx={{ m: { margin }, width: { width }, textTransform: 'none' }}
    >
      {label}
      {children}
    </Button>
  );
};
