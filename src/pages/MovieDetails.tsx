import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { getMovieDetails } from "../services/movieService";
import type { Movie } from "../types/movie";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) {
        setError(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        const data = await getMovieDetails(id);

        setMovie(data);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error || !movie) {
    return <ErrorMessage />;
  }

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-4 text-4xl font-bold">
        {movie.title}
      </h1>

      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder.jpg"
        }
        alt={movie.title}
        className="mb-6 w-64 rounded-lg"
      />

      <p className="mb-4 text-gray-300">
        {movie.overview}
      </p>

      <p className="mb-2">
        ⭐ Rating: {movie.vote_average.toFixed(1)}
      </p>

      <p>
        Release Date: {movie.release_date}
      </p>
    </main>
  );
}

export default MovieDetails;