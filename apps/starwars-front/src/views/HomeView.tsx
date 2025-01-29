import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GButton } from '@starwars-app/shared';
import { RoutesNames, RoutesPath } from '../routes/routes';

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <div>
      HomeView
      <GButton
        label={RoutesNames.CHARACTERS}
        onClick={() => navigate(RoutesPath.CHARACTERS)}
      />
      <GButton
        label={RoutesNames.PLANETS}
        onClick={() => navigate(RoutesPath.PLANETS)}
      />
    </div>
  );
};

export default HomeView;
