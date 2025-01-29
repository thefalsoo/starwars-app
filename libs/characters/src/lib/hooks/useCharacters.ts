import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../services/charactersService';

export const useCharacetrs = () => {
  return useInfiniteQuery({
    queryKey: ['characters'],
    queryFn: ({ pageParam = 1 }) => fetchCharacters(pageParam),
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
