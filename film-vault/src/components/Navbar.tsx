import { NavLink, useNavigate } from "react-router-dom";
import { useSearch } from "../Context/SearchContext";

export default function Navbar() {
  const { query, setQuery } = useSearch();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <span className="navbar-logo">🎬 FilmVault</span>
      <input
        className="navbar-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movie..."
      />
      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
