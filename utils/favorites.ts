import AsyncStorage from '@react-native-async-storage/async-storage';
import {Movie} from '../types';

export type MovieId = Movie['id'];

export const getFavorites = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const setFavorites = async (favorites: string[]) => {
  try {
    await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (error) {
    console.error(error);
  }
};

export const addFavorite = async (movieId: MovieId) => {
  const stringId = movieId.toString();
  const favorites = await getFavorites();
  const newFavorites = [...favorites, stringId];
  await setFavorites(newFavorites);
};

export const removeFavorite = async (movieId: MovieId) => {
  const stringId = movieId.toString();
  const favorites = await getFavorites();
  const newFavorites = favorites.filter((id: string) => id !== stringId);
  await setFavorites(newFavorites);
};

export const isFavorite = async (movieId: MovieId) => {
  const stringId = movieId.toString();
  const favorites = await getFavorites();
  return favorites.includes(stringId);
};

export const toggleFavorite = async (movieId: MovieId) => {
  const isFavorited = await isFavorite(movieId);
  if (isFavorited) {
    await removeFavorite(movieId);
  } else {
    await addFavorite(movieId);
  }
};
