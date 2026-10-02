import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

import { getMovieById } from "../services/movieService";
import type { MovieDetails as MovieDetailsType } from "../types/movie";

import FavoriteButton from "../components/FavoriteButton";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
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

        const data = await getMovieById(id);

        setMovie(data);
      } catch (error) {
        console.error(error);
        setError(true);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!movie) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold">
            Movie Not Found
          </h1>

          <p className="mb-6 text-gray-400">
            We couldn't find the movie you're looking for.
          </p>

          <Link
            to="/movies"
            className="rounded-lg bg-white px-5 py-3 font-semibold text-black"
          >
            Back to Movies
          </Link>
        </div>
      </main>
    );
  }

  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Backdrop */}
      {movie.backdrop_path && (
        <div className="relative h-[300px] overflow-hidden md:h-[400px]">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Poster */}
          <div className="shrink-0">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={movie.title}
              className="w-64 rounded-lg shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mt-3 text-lg italic text-gray-400">
                "{movie.tagline}"
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-300">
              <span>
                ⭐ {movie.vote_average.toFixed(1)}
              </span>

              <span>
                {releaseYear}
              </span>

              <span>
                {movie.release_date || "Release date unavailable"}
              </span>

              {movie.runtime !== null && (
                <span>
                  {movie.runtime} min
                </span>
              )}
            </div>

            {/* Genres */}
            {movie.genres.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <FavoriteButton
              movie={{
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average,
              release_date: movie.release_date,
              }}
            />

            {/* Overview */}
            <div className="mt-8">
              <h2 className="mb-3 text-2xl font-semibold">
                Overview
              </h2>

              <p className="leading-7 text-gray-300">
                {movie.overview || "No overview available."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;