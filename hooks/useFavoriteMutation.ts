import {QueryClient, useMutation} from '@tanstack/react-query';
import {axiosInstance} from '../services/axios';
import {endpoints} from '../services/endpoints';
import {Movie} from '../types';

const queryClient = new QueryClient();

export const useFavoriteMutation = () => {
  const toggleFavorite = async ({
    movieId,
    favorite,
  }: {
    movieId: Movie['id'];
    favorite: boolean;
  }) => {
    try {
      await axiosInstance.post(endpoints.toggleFavorite(), {
        media_type: 'movie',
        media_id: movieId,
        favorite,
      });
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  };

  return useMutation({
    mutationFn: toggleFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });
    },
  });
};
