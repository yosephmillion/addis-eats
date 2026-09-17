import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Starts empty every time the app is refreshed
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(dish) {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some((item) => item.id === dish.id);

      if (exists) {
        return currentFavorites.filter((item) => item.id !== dish.id);
      }

      return [...currentFavorites, dish];
    });
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  function removeFavorite(id) {
    setFavorites((currentFavorites) =>
      currentFavorites.filter((item) => item.id !== id),
    );
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
