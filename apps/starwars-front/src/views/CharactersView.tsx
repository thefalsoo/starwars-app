import React from 'react';
import { Link } from 'react-router-dom';
import { RoutesNames, RoutesPath } from '../routes/routes';

const CharactersView = () => {
  return (
    <div>
      CharactersView
      <Link to={RoutesPath.HOME}>{RoutesNames.HOME}</Link>
    </div>
  );
};

export default CharactersView;
