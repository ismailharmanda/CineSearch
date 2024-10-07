import {useQuery} from '@tanstack/react-query';
import {axiosInstance} from '../services/axios';
import {endpoints} from '../services/endpoints';
import {MoviesResponse} from '../types';

export const useMovieDetails = (movieID: number) => {
  const fetchMovieDetails = async () => {
    try {
      const response = await axiosInstance.get<MoviesResponse>(
        endpoints.getMovieDetails(movieID),
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  };

  return useQuery({
    queryKey: ['movieDetails', movieID],
    queryFn: fetchMovieDetails,
  });
};
