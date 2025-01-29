import { Icon } from '@iconify/react';

export enum GIconNames {
  Earth = 'mdi:earth',
  AccountMultiple = 'mdi:account-multiple',
}

interface GIconProps {
  iconName: GIconNames;
  size?: string;
  color?: string;
}

export const GIcon: React.FC<GIconProps> = ({
  iconName,
  size = '24px',
  color = 'black',
}) => {
  return <Icon icon={iconName} width={size} height={size} color={color} />;
};
