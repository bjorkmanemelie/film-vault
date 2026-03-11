import { createContext, useContext, useState } from "react";

type SearchMovies = {
  query: string;
  setQuery: (query: string) => void;
};

const SearchContext = createContext<SearchMovies | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch needs to be used in SearchProvider");
  return context;
}
