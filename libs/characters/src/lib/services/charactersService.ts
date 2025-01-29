import axios from 'axios';
import { Character, CharactersResponse } from '../types/charactersTypes';

export const fetchCharacters = async (
  page: number
): Promise<CharactersResponse> => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/?page=${page}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        `Failed to fetch characters: ${error.response.statusText}`
      );
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export const fetchCharacter = async (
  characterId: string
): Promise<Character> => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/people/${characterId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        `Failed to fetch character: ${error.response.statusText}`
      );
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
