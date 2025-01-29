import React from 'react';
import { GButton } from '@starwars-app/shared';
import { PlanetsList } from '@starwars-app/planets';

import { RoutesNames, RoutesPath } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const PlanetsView = () => {
  const navigate = useNavigate();
  return (
    <div>
      PlanetsView
      <GButton
        label={RoutesNames.HOME}
        onClick={() => navigate(RoutesPath.HOME)}
      />
      <PlanetsList />
    </div>
  );
};

export default PlanetsView;
