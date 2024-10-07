import {GENRES} from '../constants';

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type GenreID = (typeof GENRES)[number]['id'];
export type GenreName = (typeof GENRES)[number]['name'];
export interface Genre {
  id: GenreID;
  name: GenreName;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
