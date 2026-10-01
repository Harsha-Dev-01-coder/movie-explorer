import { useEffect, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
} from "../services/movieService";

import type { Movie } from "../types/movie";

function Home() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);

        const [popular, topRated, nowPlaying] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getNowPlayingMovies(),
        ]);

        setPopularMovies(popular.results);
        setTopRatedMovies(topRated.results);
        setNowPlayingMovies(nowPlaying.results);
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

  if (
    popularMovies.length === 0 &&
    topRatedMovies.length === 0 &&
    nowPlayingMovies.length === 0
  ) {
    return <EmptyState />;
  }

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <section className="mb-12">
        <h1 className="mb-6 text-3xl font-bold">
          Popular Movies
        </h1>

        {popularMovies.length > 0 ? (
          <MovieGrid movies={popularMovies} />
        ) : (
          <EmptyState />
        )}
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">
          Top Rated
        </h2>

        {topRatedMovies.length > 0 ? (
          <MovieGrid movies={topRatedMovies} />
        ) : (
          <EmptyState />
        )}
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold">
          Now Playing
        </h2>

        {nowPlayingMovies.length > 0 ? (
          <MovieGrid movies={nowPlayingMovies} />
        ) : (
          <EmptyState />
        )}
      </section>
    </main>
  );
}

export default Home;