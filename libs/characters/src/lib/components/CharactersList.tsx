import React from 'react';
import { useCharacetrs } from '../hooks/useCharacters';
import { Character } from '../types/charactersTypes';
import { GButton, GCard } from '@starwars-app/shared';
import { useNavigate } from 'react-router-dom';

export const CharactersList = () => {
  const navigate = useNavigate();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useCharacetrs();
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.pages.map((page) =>
          page.results.map((character: Character, index: number) => (
            <div key={index} className="flex justify-center">
              <GCard
                title={character.name}
                content={`Sexe: ${
                  character.gender || 'Inconnu'
                }\nDate de naissance: ${character.birth_year}`}
                onClick={() => navigate(`/characters/${index + 1}`)}
                buttonLabel="Voir les détails"
              />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center mt-6">
        <GButton
          label="Charger plus de personnages"
          onClick={fetchNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        />
      </div>
    </div>
  );
};
