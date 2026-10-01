import { useEffect, useState } from "react";
import type { SubmitEvent } from "react";
import { useSearchParams } from "react-router-dom";

import MovieGrid from "../components/MovieGrid";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import EmptyState from "../components/EmptyState";

import { searchMovies } from "../services/movieService";
import type { Movie } from "../types/movie";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState(false);

  const urlQuery = searchParams.get("query");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!urlQuery?.trim()) {
        setMovies([]);
        setSearched(false);
        return;
      }

      try {
        setQuery(urlQuery);
        setLoading(true);
        setError(false);
        setSearched(true);

        const data = await searchMovies(urlQuery);

        setMovies(data.results);
      } catch (error) {
        console.error(error);
        setError(true);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [urlQuery]);

  const handleSearch = async (
    event: SubmitEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    setSearchParams({ query: trimmedQuery });

    try {
      setLoading(true);
      setError(false);
      setSearched(true);

      const data = await searchMovies(trimmedQuery);

      setMovies(data.results);
    } catch (error) {
      console.error(error);
      setError(true);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black p-6 text-white">
      <h1 className="mb-6 text-3xl font-bold">
        Search Movies
      </h1>

      <form
        onSubmit={handleSearch}
        className="mb-8 flex gap-3"
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for a movie..."
          className="flex-1 rounded-lg bg-zinc-900 px-4 py-3 text-white outline-none ring-1 ring-zinc-700 focus:ring-2 focus:ring-white"
        />

        <button
          type="submit"
          className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          Search
        </button>
      </form>

      {loading && <Loading />}

      {!loading && error && <ErrorMessage />}

      {!loading &&
        !error &&
        searched &&
        movies.length === 0 && <EmptyState />}

      {!loading &&
        !error &&
        movies.length > 0 && (
          <MovieGrid movies={movies} />
        )}
    </main>
  );
}

export default Search;