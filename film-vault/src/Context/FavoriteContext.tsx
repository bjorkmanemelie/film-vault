import { createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "../reducers/favoriteReducer";
import type { Movie, FavoriteAction } from "../reducers/favoriteReducer";

type FavoriteContextType = {
  favorites: Movie[];
  dispatch: (action: FavoriteAction) => void
};

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export function FavoriteProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FavoriteContext.Provider value={{ favorites: state.favorites, dispatch }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("...");
  }
  return context;
}
