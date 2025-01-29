export interface Planet {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
  orbital_period: string;
}
export interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}
