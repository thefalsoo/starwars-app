import axios from 'axios';
import { PlanetsResponse } from '../types/planetsTypes';

export const fetchPlanets = async (page: number): Promise<PlanetsResponse> => {
  try {
    const response = await axios.get(
      `https://swapi.dev/api/planets/?page=${page}`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(`Failed to fetch planets: ${error.response.statusText}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
