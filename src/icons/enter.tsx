import React from 'react';
import { IconsProps } from '../types';

export function Enter({ className }: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} data-testid="EnterIcon">
      <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path>
    </svg>
  );
}
