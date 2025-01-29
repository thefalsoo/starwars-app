import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacters';

export const CharacterDetail: React.FC = () => {
  const { id = '0' } = useParams<{ id: string }>();

  const { data } = useCharacter(id);

  return (
    <div className=" bg-gray-800 text-white min-h-screen">
      {data && (
        <div className="max-w-4xl mx-auto bg-gray-900 p-6 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-4 text-center">{data.name}</h1>

          <div className="space-y-4">
            <p>
              <strong>Taille :</strong> {data.height} cm
            </p>
            <p>
              <strong>Masse :</strong> {data.mass} kg
            </p>
            <p>
              <strong>Couleur des cheveux :</strong> {data.hair_color}
            </p>
            <p>
              <strong>Couleur de la peau :</strong> {data.skin_color}
            </p>
            <p>
              <strong>Couleur des yeux :</strong> {data.eye_color}
            </p>
            <p>
              <strong>Année de naissance :</strong> {data.birth_year}
            </p>
            <p>
              <strong>Genre :</strong> {data.gender}
            </p>
            <p>
              <strong>Films :</strong> {data.films.join(', ')}
            </p>
            <p>
              <strong>Planète d'origine :</strong> {data.homeworld}
            </p>
            <p>
              <strong>Espèces :</strong> {data.species.join(', ')}
            </p>
            <p>
              <strong>Vaisseaux spatiaux :</strong> {data.starships.join(', ')}
            </p>
            <p>
              <strong>Véhicules :</strong> {data.vehicles.join(', ')}
            </p>
            <p>
              <strong>Date de création :</strong>{' '}
              {new Date(data.created).toLocaleString()}
            </p>
            <p>
              <strong>Date de modification :</strong>{' '}
              {new Date(data.edited).toLocaleString()}
            </p>
            <p>
              <strong>URL :</strong>
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {data.url}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
