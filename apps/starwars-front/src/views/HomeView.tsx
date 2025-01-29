import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GButton, GIconNames } from '@starwars-app/shared';
import { RoutesNames, RoutesPath } from '../routes/routes';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="flex space-x-2">
        <GButton
          label={RoutesNames.CHARACTERS}
          onClick={() => navigate(RoutesPath.CHARACTERS)}
          iconName={GIconNames.AccountMultiple}
        />
        <GButton
          label={RoutesNames.PLANETS}
          onClick={() => navigate(RoutesPath.PLANETS)}
          iconName={GIconNames.Earth}
        />
      </div>
    </div>
  );
};

export default HomeView;
