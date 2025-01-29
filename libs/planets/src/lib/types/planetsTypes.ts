export interface Planet {
  name: string;
  climate: string;
  population: string;
  terrain: string;
}

export interface PlanetsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}
