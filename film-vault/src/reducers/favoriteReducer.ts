export type Movie = {
  id: number;
  title: string;
  year: number;
  rating: number;
};

export type NewMovie = Omit<Movie, "id">; //utility type Omit tar bort vissa fält

type FavoriteState = {
  favorites: Movie[];
};

export type MovieUpdate = Partial<Omit<Movie, "id">> 

//Union
export type FavoriteAction =
  | { type: "ADD_FAVORITE"; payload: Movie }
  | { type: "REMOVE_FAVORITE"; payload: number };

const initialState = {
  favorites: [],
};

function reducer(state: FavoriteState, action: FavoriteAction) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload], //behåll befintliga favoriter. filmen vi skickar när vi dispatchar
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.id !== action.payload,
        ),
      };
  }
}

export { reducer, initialState };
