import type { Movie } from "../reducers/favoriteReducer";

type FavoriteListProps = {
  favorites: Movie[];
};

function FavoriteList(props: FavoriteListProps) {
  return (
    <div>
      <h2>My Favorites</h2>
      {props.favorites.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
}

export default FavoriteList;
