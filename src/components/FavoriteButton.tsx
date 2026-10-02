import { useState } from "react";
import type { MouseEvent } from "react";

import type { FavoriteMovie } from "../types/movie";
import {
  addFavorite,
  isFavorite,
  removeFavorite,
} from "../utils/favorites";

interface FavoriteButtonProps {
  movie: FavoriteMovie;
}

function FavoriteButton({ movie }: FavoriteButtonProps) {
  const [favorite, setFavorite] = useState(() =>
    isFavorite(movie.id)
  );

  const handleFavorite = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (favorite) {
      removeFavorite(movie.id);
      setFavorite(false);
    } else {
      addFavorite(movie);
      setFavorite(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleFavorite}
      className="mt-3 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 font-semibold text-white transition hover:bg-zinc-800"
    >
      {favorite
        ? "♥ Remove from Favorites"
        : "♡ Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;