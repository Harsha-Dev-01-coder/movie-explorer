import api from "./api";
import type { Movie } from "../types/movie";

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getPopularMovies = async (): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>("/movie/popular");
  return response.data;
};

export const getTopRatedMovies = async (): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>("/movie/top_rated");
  return response.data;
};

export const getNowPlayingMovies = async (): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>("/movie/now_playing");
  return response.data;
};

export const getMovieDetails = async (
  id: string
): Promise<Movie> => {
  const response = await api.get<Movie>(`/movie/${id}`);
  return response.data;
};

export const searchMovies = async (
  query: string
): Promise<MovieResponse> => {
  const response = await api.get<MovieResponse>("/search/movie", {
    params: {
      query,
    },
  });

  return response.data;
};