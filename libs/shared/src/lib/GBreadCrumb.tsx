import React from 'react';

export interface GBreadCrumbProps {
  items: Array<{
    label: string;
    onClick?: () => void;
  }>;
}

export const GBreadCrumb: React.FC<GBreadCrumbProps> = ({ items }) => {
  return (
    <nav className="flex space-x-2 text-gray-300">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span
            onClick={item.onClick}
            className="text-white cursor-pointer hover:text-blue-500"
          >
            {item.label}
          </span>
          {index < items.length - 1 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
        </div>
      ))}
    </nav>
  );
};
