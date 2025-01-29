import React from 'react';
import { usePlanets } from '../hooks/usePlanets';
import { Planet } from '../types/planetsTypes';
import { GButton, GCard } from '@starwars-app/shared';

export const PlanetsList = () => {
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = usePlanets();
  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.pages.map((page) =>
          page.results.map((planet: Planet) => (
            <GCard
              title={planet.name}
              content={`Population: ${
                planet.population || 'Unknown'
              }\nClimate: ${planet.climate}`}
            />
          ))
        )}
      </div>
      <div className="flex justify-center mt-6">
        <GButton
          label={'Charger plus de planètes'}
          onClick={fetchNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        />
      </div>
    </div>
  );
};
