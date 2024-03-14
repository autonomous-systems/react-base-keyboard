import React from 'react';
import { IconsProps } from '../types';

export function Space({ className }: IconsProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} data-testid="SpaceIcon">
      <path d="M18 9v4H6V9H4v6h16V9z"></path>
    </svg>
  );
}
