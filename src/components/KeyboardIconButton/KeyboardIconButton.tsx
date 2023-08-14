import React from 'react';
import { IconButton } from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';

interface KeyboardIconButtonProps extends IconButtonProps {
  onClick?: () => void;
}

export const KeyboardIconButton: React.FC<KeyboardIconButtonProps> = ({
  onClick,
  children,
  color,
  disabled,
  edge,
  size,
  sx,
}) => {
  return (
    <IconButton color={color} disabled={disabled} edge={edge} size={size} onClick={onClick} sx={sx}>
      {children}
    </IconButton>
  );
};
