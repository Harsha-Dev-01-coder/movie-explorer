import { useEffect, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import EmptyState from "../components/EmptyState";
import type { FavoriteMovie } from "../types/movie";
import { getFavorites } from "../utils/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);

  useEffect(() => {
    const savedFavorites = getFavorites();

    setFavorites(savedFavorites);
  }, []);

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        Favorites
      </h1>

      {favorites.length === 0 ? (
        <EmptyState />
      ) : (
        <MovieGrid movies={favorites} />
      )}
    </main>
  );
}

export default Favorites;