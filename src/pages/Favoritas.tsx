import React, { useContext } from 'react';
import { FavoritesContext } from '../comṕonents/code-components/FavoriteButton';

const Favoritas = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  const handleRemoveFavorite = (id) => {
    removeFavorite(id);
  };

  return (
    <div>
      <h2>Notícias Favoritas</h2>
      {favorites.length > 0 ? (
        <>
          <ul>
            {favorites.map((favorite, index) => (
              <li key={index}>
                <h3>{favorite.titulo}</h3>
                <p>{favorite.introducao}</p>
                {/* Renderize outras informações da notícia conforme necessário */}
                <button onClick={() => handleRemoveFavorite(favorite.id)}>Remover dos favoritos</button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Nenhuma notícia favorita ainda.</p>
      )}
    </div>
  );
};

export default Favoritas;
