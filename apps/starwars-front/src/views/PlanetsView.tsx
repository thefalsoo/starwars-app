import React from 'react';
import { GBreadCrumb } from '@starwars-app/shared';
import { PlanetsList } from '@starwars-app/planets';

import { RoutesNames, RoutesPath } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const PlanetsView = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-gray-800 p-6">
      <div className="flex justify-start items-center space-x-3 mb-6">
        <h2 className="text-2xl font-semibold text-white">
          Liste des planètes
        </h2>
        <GBreadCrumb
          items={[
            {
              label: RoutesNames.HOME,
              onClick: () => navigate(RoutesPath.HOME),
            },
            { label: RoutesNames.PLANETS },
          ]}
        />
      </div>
      <div className="mt-6">
        <PlanetsList />
      </div>
    </div>
  );
};

export default PlanetsView;
