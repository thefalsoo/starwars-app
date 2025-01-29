import React from 'react';
import { useCharacetrs } from '../hooks/useCharacters';
import { Character } from '../types/charactersTypes';

export const CharactersList = () => {
  const { data } = useCharacetrs();
  return (
    <div>
      CharactersList
      <ul>
        {data?.pages.map((page) =>
          page.results.map((character: Character) => (
            <li> {character.name} </li>
          ))
        )}
      </ul>
    </div>
  );
};
