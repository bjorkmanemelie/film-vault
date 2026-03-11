import MovieCards from "../components/MovieCard";
import { useFavorites } from "../Context/FavoriteContext";
import { useFetch } from "../hooks/useFetch";
import { useSearch } from "../Context/SearchContext";

type TMDBMovie = {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
};

function HomePage() {
  const { query } = useSearch();
  const { dispatch } = useFavorites();
  const { state } = useFetch<TMDBMovie[]>(() =>
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => data.results),
  );

  if (state.status === "loading") return <p>Loading movies...</p>;
  if (state.status === "error") return <p>{state.error}</p>;

  const filteredMovies = (state.data ?? []).filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="page">
      <div className="grid">
        {filteredMovies.map((movie) => (
          <MovieCards
            key={movie.id}
            title={movie.title}
            year={Number(movie.release_date.slice(0, 4))}
            rating={movie.vote_average}
            posterPath={movie.poster_path}
            onAddFavorite={() =>
              dispatch({
                type: "ADD_FAVORITE",
                payload: {
                  id: movie.id,
                  title: movie.title,
                  year: Number(movie.release_date.slice(0, 4)),
                  rating: movie.vote_average,
                },
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
