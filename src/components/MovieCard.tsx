import { Link } from "react-router-dom";
import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <article>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/placeholder.jpg"
          }
          alt={movie.title}
        />

        <h2>{movie.title}</h2>

        <p>{movie.vote_average.toFixed(1)}</p>

        <p>{movie.release_date}</p>
      </article>
    </Link>
  );
}

export default MovieCard;