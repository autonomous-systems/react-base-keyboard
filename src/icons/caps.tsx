import React from 'react';
import { IconsProps } from '../types';

export function Caps({ className }: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} data-testid="CapsIcon">
      <path d="M12 8.41 16.59 13 18 11.59l-6-6-6 6L7.41 13zM6 18h12v-2H6z"></path>
    </svg>
  );
}
