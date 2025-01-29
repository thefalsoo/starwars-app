import React from 'react';
import { GButton } from './GButton';
import { GIconNames } from './GIcon';

export interface GCardProps {
  title: string;
  content: React.ReactNode;
  onClick?: () => void;
  buttonLabel?: string;
  buttonIconName?: GIconNames;
}

export const GCard: React.FC<GCardProps> = ({
  title,
  content,
  onClick,
  buttonLabel,
  buttonIconName,
}) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:scale-105 p-4 cursor-pointer">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{content}</p>
      {onClick && buttonLabel ? (
        <div className="mt-4">
          <GButton
            label={buttonLabel}
            onClick={onClick}
            iconName={buttonIconName}
          />
        </div>
      ) : null}
    </div>
  );
};
