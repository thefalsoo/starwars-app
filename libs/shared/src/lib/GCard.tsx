import React from 'react';

export interface GCardProps {
  title: string;
}

export const GCard: React.FC<GCardProps> = ({ title }) => {
  return <div>GCard {title}</div>;
};
