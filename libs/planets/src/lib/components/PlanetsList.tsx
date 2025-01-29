import React from 'react';
import { usePlanets } from '../hooks/usePlanets';
import { Planet } from '../types/planetsTypes';
export const PlanetsList = () => {
  const { data } = usePlanets();
  console.log(data);
  return (
    <div>
      PlanetsList
      <ul>
        {data?.pages.map((page) =>
          page.results.map((planet: Planet) => <li> {planet.name} </li>)
        )}
      </ul>
    </div>
  );
};
