import { create } from "zustand";

export const useFavoritesStore = create((set, get) => ({
  favorites: [],

  toggleFavorite: (dish) => {
    const exists = get().favorites.some((item) => item.id === dish.id);

    if (exists) {
      set((state) => ({
        favorites: state.favorites.filter((item) => item.id !== dish.id),
      }));
    } else {
      set((state) => ({
        favorites: [...state.favorites, dish],
      }));
    }
  },

  removeFavorite: (id) => {
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    }));
  },

  isFavorite: (id) => {
    return get().favorites.some((item) => item.id === id);
  },

  clearFavorites: () => {
    set({ favorites: [] });
  },
}));
