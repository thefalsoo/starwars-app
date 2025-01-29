import React from 'react';
import { GButton } from '@starwars-app/shared';
import { PlanetsList } from '@starwars-app/planets';

import { RoutesNames, RoutesPath } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const PlanetsView = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-800 p-6">
      <div className="flex justify-between">
        <GButton
          label={RoutesNames.HOME}
          onClick={() => navigate(RoutesPath.HOME)}
        />
        <div></div>
        <h2 className="text-2xl font-semibold text-white mb-6">
          Liste des planètes
        </h2>
      </div>
      <div className="mt-6">
        <PlanetsList />
      </div>
    </div>
  );
};

export default PlanetsView;
