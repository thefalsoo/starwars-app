import React from 'react';
import { GIcon, GIconNames } from './GIcon';

export interface GButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  iconName?: GIconNames;
}

export const GButton: React.FC<GButtonProps> = ({
  label,
  onClick,
  disabled,
  iconName,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex
      ${
        disabled
          ? 'bg-gray-800 cursor-not-allowed opacity-50'
          : 'bg-gray-900 hover:bg-gray-800'
      }
      text-white font-bold py-2 px-4 rounded-lg border-4
      border-transparent hover:border-blue-500
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-blue-500
      ${disabled ? '' : 'hover:border-blue-400'}
    `}
    >
      {iconName && <GIcon iconName={iconName} color="white" />}
      {label}
    </button>
  );
};
