import React from 'react';
import { KeyboardButtonProps } from '../../types';

export const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  label,
  onClick,
  buttonStyle,
  icon,
}) => {
  return (
    <button
      className={`btn ${buttonStyle?.bgColor} ${buttonStyle?.borderStyle} ${buttonStyle?.textStyle} ${buttonStyle?.layout}`}
      onClick={onClick}
    >
      <div className='flex flex-row justify-between items-center'>
        {label}
        {icon}
      </div>
    </button>
  );
};
