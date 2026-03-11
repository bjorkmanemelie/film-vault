import FavoriteList from "../components/FavoritesList";
import { useFavorites } from "../Context/FavoriteContext";

function FavoritesPage() {
  const { favorites } = useFavorites();
  return (
    <div>
      <h1>FavoritePage</h1>
      <FavoriteList favorites={favorites} />
    </div>
  );
}

export default FavoritesPage;
