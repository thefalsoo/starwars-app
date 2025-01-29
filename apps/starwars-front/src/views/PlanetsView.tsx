import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesNames, RoutesPath } from '../routes/routes';

const PlanetsView = () => {
  return (
    <div>
      PlanetsView
      <Link to={RoutesPath.HOME}>{RoutesNames.HOME}</Link>
    </div>
  );
};

export default PlanetsView;
