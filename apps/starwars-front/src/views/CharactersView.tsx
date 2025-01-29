import React from 'react';
import { GButton } from '@starwars-app/shared';
import { CharactersList } from '@starwars-app/characters';

import { RoutesNames, RoutesPath } from '../routes/routes';
import { useNavigate } from 'react-router-dom';

const CharactersView = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-gray-800 p-6">
      <div className="flex justify-between">
        <GButton
          label={RoutesNames.HOME}
          onClick={() => navigate(RoutesPath.HOME)}
        />
        <div></div>
        <h2 className="text-center text-2xl font-semibold text-white mb-6">
          Liste des personnages
        </h2>
      </div>
      <div className="mt-6">
        <CharactersList />
      </div>
    </div>
  );
};

export default CharactersView;
