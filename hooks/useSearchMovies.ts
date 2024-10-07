import {useInfiniteQuery} from '@tanstack/react-query';
import {axiosInstance} from '../services/axios';
import {endpoints} from '../services/endpoints';
import {MoviesResponse} from '../types';

export const useSearchMovies = (query: string) => {
  const fetchSearchMovies = async ({pageParam = 1}) => {
    try {
      const response = await axiosInstance.get<MoviesResponse>(
        endpoints.getMoviesBySearch(query, pageParam),
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching search movies:', error);
      throw error;
    }
  };

  return useInfiniteQuery({
    queryKey: ['searchMovies', query],
    queryFn: fetchSearchMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });
};
