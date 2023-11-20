import React, { useContext } from 'react';
import { FavoritesContext } from '../comṕonents/code-components/FavoriteContext';
import LerMais from '../comṕonents/code-components/LerMais';
import { calculateDaysAgo } from '../utils/dateUtils';
import RemoveFavoriteImageButton from '../utils/RemoveFavorite';
import '../comṕonents/css-components/FavoritePage.css'


const Favoritas = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className='favoritePageContainer'>
      <h2>Notícias Favoritas</h2>
      {favorites.length > 0 ? (
        <>
          <ul className='favorite-notice-contaier'>
            {favorites.map((favorite, index) => (
              <li key={index}>
                <div className='li-itens-container'>
                  <h3>{favorite.titulo}</h3>
                  <p>{favorite.introducao}</p>
                  <p>{favorite.data_publicacao ? calculateDaysAgo(favorite.data_publicacao) : 'Data de publicação não disponível'}</p>
                  <div className='LearnAndRemove'> 
                    <LerMais link={favorite.link} />
                    <RemoveFavoriteImageButton id={favorite.id} />
                  </div>
                </div>
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
