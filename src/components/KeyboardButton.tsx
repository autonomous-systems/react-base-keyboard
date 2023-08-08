import React from 'react';
import { Button } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

interface KeyboardButtonProps extends ButtonProps {
  label?: string;
  width?: string;
  onClick?: () => void;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  label,
  onClick,
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
      sx={{ m: '5px', width: { width }, textTransform: 'none' }}
    >
      {label}
      {children}
    </Button>
  );
};

export default KeyboardButton;
