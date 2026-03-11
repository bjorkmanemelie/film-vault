import Button from "./Button";
import type { Movie } from "../reducers/favoriteReducer";

type MovieCards = Pick<Movie, "title" | "year" | "rating"> & {
  onAddFavorite: () => void;
  posterPath: string;
};

function MovieCards({
  title,
  year,
  rating,
  onAddFavorite,
  posterPath,
}: MovieCards) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-meta">
          {year} • ⭐ {rating.toFixed(1)}
        </p>
        <Button label="❤️ Add Favorite" onClick={onAddFavorite} />
      </div>
    </div>
  );
}

export default MovieCards;
