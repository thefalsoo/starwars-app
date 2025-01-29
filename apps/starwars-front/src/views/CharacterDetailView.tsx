import React from 'react';
import { GButton } from '@starwars-app/shared';
import { CharacterDetail } from '@starwars-app/characters';

import { RoutesNames, RoutesPath } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const CharacterDetailView = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-800 p-6">
      <GButton
        label={RoutesNames.CHARACTERS}
        onClick={() => navigate(RoutesPath.CHARACTERS)}
      />
      <CharacterDetail />
    </div>
  );
};

export default CharacterDetailView;
