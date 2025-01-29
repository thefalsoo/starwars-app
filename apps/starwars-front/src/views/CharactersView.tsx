import React from 'react';
import { GButton } from '@starwars-app/shared';
import { CharactersList } from '@starwars-app/characters';

import { RoutesNames, RoutesPath } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const CharactersView = () => {
  const navigate = useNavigate();

  return (
    <div>
      CharactersView
      <GButton
        label={RoutesNames.HOME}
        onClick={() => navigate(RoutesPath.HOME)}
      />
      <CharactersList />
    </div>
  );
};

export default CharactersView;
