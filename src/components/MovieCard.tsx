import { Link } from "react-router-dom";

import FavoriteButton from "./FavoriteButton";

import type {
  FavoriteMovie,
  Movie,
} from "../types/movie";

interface MovieCardProps {
  movie: Movie | FavoriteMovie;
}

function MovieCard({ movie }: MovieCardProps) {
  const releaseYear = movie.release_date
    ? movie.release_date.slice(0, 4)
    : "N/A";

  return (
    <Link
      to={`/movies/${movie.id}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-lg bg-zinc-900 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="aspect-[2/3] overflow-hidden bg-zinc-800">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/placeholder.jpg"
            }
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-3">
          <h2 className="truncate text-base font-semibold text-white">
            {movie.title}
          </h2>

          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-yellow-400">
              ⭐ {movie.vote_average.toFixed(1)}
            </span>

            <span className="text-gray-400">
              {releaseYear}
            </span>
          </div>

          <FavoriteButton
            movie={{
              id: movie.id,
              title: movie.title,
              poster_path: movie.poster_path,
              vote_average: movie.vote_average,
              release_date: movie.release_date,
            }}
          />
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;