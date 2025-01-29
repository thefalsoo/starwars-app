import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GBreadCrumb } from '@starwars-app/shared';
import { CharacterDetail } from '@starwars-app/characters';
import { RoutesNames, RoutesPath } from '../routes/routes';
import { useCharacter } from '@starwars-app/characters';

const CharacterDetailView = () => {
  const navigate = useNavigate();
  const { id = '0' } = useParams<{ id: string }>();

  const { data } = useCharacter(id);

  const characterName = data?.name;

  return (
    <div className="bg-gray-800 p-6">
      <div className="mb-4">
        <GBreadCrumb
          items={[
            {
              label: RoutesNames.HOME,
              onClick: () => navigate(RoutesPath.HOME),
            },
            {
              label: RoutesNames.CHARACTERS,
              onClick: () => navigate(RoutesPath.CHARACTERS),
            },
            {
              label: characterName || 'Personnage',
            },
          ]}
        />
      </div>
      <div className="mt-6">
        <CharacterDetail />
      </div>
    </div>
  );
};

export default CharacterDetailView;
