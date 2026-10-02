import type { FavoriteMovie } from "../types/movie";

const FAVORITES_KEY = "favoriteMovies";

export const getFavorites = (): FavoriteMovie[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (!favorites) {
    return [];
  }

  try {
    return JSON.parse(favorites) as FavoriteMovie[];
  } catch {
    return [];
  }
};

export const addFavorite = (
  movie: FavoriteMovie
): void => {
  const favorites = getFavorites();

  const alreadyExists = favorites.some(
    (favorite) => favorite.id === movie.id
  );

  if (alreadyExists) {
    return;
  }

  const updatedFavorites = [...favorites, movie];

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );
};

export const removeFavorite = (
  movieId: number
): void => {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(
    (favorite) => favorite.id !== movieId
  );

  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );
};

export const isFavorite = (
  movieId: number
): boolean => {
  const favorites = getFavorites();

  return favorites.some(
    (favorite) => favorite.id === movieId
  );
};