import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPlanets } from '../services/planetsService';

export const usePlanets = () => {
  return useInfiniteQuery({
    queryKey: ['planets'],
    queryFn: ({ pageParam = 1 }) => fetchPlanets(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        return parseInt(
          new URL(lastPage.next).searchParams.get('page') || '0',
          10
        );
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};
