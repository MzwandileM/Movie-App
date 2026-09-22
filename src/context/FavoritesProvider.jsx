import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");

    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function addToFavorites(movie) {
    setFavorites((prev) => {
      if (prev.some((favorite) => favorite.id === movie.id)) {
        return prev;
      }

      return [...prev, movie];
    });
  }

  function removeFromFavorites(movieId) {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
