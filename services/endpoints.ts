import {GenreID} from '../types';

export const endpoints = {
  getPopularMovies: (page: number) => `/movie/popular?page=${page}`,
  getGenres: () => '/genre/movie/list',
  getPopularMoviesWithGenres: (genreIDs: GenreID[], page: number) =>
    `/discover/movie?sort_by=popularity.desc&with_genres=${genreIDs.join(
      '|',
    )}&page=${page}`,
  getMoviesBySearch: (query: string, page: number) =>
    `/search/movie?query=${query}&page=${page}`,
  getMovieDetails: (movieID: number) => `/movie/${movieID}`,
  toggleFavorite: () => '/account/21557242/favorite',
  getFavorites: (page: number) =>
    `/account/21557242/favorite/movies?page=${page}`,
};
