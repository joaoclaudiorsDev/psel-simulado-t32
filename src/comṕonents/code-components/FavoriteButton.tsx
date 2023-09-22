import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id, titulo, introducao, data_publicacao, link) => {
    setFavorites((prevFavorites) => {
      const existingIndex = prevFavorites.findIndex((fav) => fav.id === id);

      if (existingIndex !== -1) {
        const updatedFavorites = [...prevFavorites];
        updatedFavorites.splice(existingIndex, 1);
        return updatedFavorites;
      } else {
        return [...prevFavorites, { id, titulo, introducao, data_publicacao, link }];
      }
    });
  };

  const isFavorite = (id) => {
    return favorites.some(favorite => favorite.id === id);
  };

  const removeFavorite = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
