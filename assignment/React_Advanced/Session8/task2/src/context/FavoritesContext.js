import { createContext, useReducer } from "react";

export const FavoritesContext = createContext();

const initialState = {
  favorites: [],
};

const favoritesReducer = (state, action) => {

  switch (action.type) {

    case "ADD_FAVORITE":
      if (state.favorites.includes(action.payload)) {
        return state;
      }

      return {
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        favorites: state.favorites.filter(
          (id) => id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};