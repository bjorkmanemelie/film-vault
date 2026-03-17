import { useSearch } from "../Context/SearchContext";
import { useEffect, useState } from "react";
import type { TMDBMovie } from "../types/movie";

function SearchPage() {
  const { query } = useSearch();
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  useEffect(() => {
    if (!query) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [query]);

  return (
    <div>
      <h1>Searching page</h1>
    </div>
  );
}

export default SearchPage;
