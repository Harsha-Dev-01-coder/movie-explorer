import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

import { getPopularMovies } from "../services/movieService";
import type { Movie } from "../types/movie";

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const data = await getPopularMovies();

        setMovies(data.results);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (movies.length === 0) {
    return <EmptyState />;
  }

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        Movies
      </h1>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </main>
  );
}

export default Movies;