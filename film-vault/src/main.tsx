import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FavoriteProvider } from "./Context/FavoriteContext.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import Navbar from "./components/Navbar.tsx";
import { SearchProvider } from "./Context/SearchContext.tsx";
import SearchPage from "./pages/SearchPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FavoriteProvider>
      <SearchProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/moviedetails" element={<MovieDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </FavoriteProvider>
  </StrictMode>,
);
