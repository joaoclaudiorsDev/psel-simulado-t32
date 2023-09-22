import React, { useState, useEffect, useContext } from "react";
import { calculateDaysAgo } from "../../utils/dateUtils";
import { fetchApi } from "./Fetch";
import LerMais from "./LerMais";
import NoticeButton from "./NoticeButton";
import { FavoritesContext } from "./FavoriteButton";

function NoticeCard() {
  const [noticias, setNotices] = useState([]);
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi();
        setNotices(data.items.slice(1, 10));
      } catch (error) {
        console.error('Erro ao buscar :', error);
      }
    };

    fetchData();
  }, []);

  const handleFetchNews = async () => {
    try {
      const response = await fetchApi();
      if (response.items && response.items.length > 0) {
        const nextNoticias = response.items.slice(noticias.length, noticias.length + 9);
        setNotices([...noticias, ...nextNoticias]);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <>
      <div>
        {noticias.map((noticia) => (
          <div key={noticia.id}>
            <button onClick={() => toggleFavorite(noticia.id, noticia.titulo, noticia.introducao, noticia.data_publicacao, noticia.link)}>
              {isFavorite(noticia.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            </button>
            <h3>{noticia.titulo}</h3>
            <p>{noticia.introducao}</p>
            <p>{calculateDaysAgo(noticia.data_publicacao)}</p>
            <LerMais link={noticia.link} />
          </div>
        ))}
      </div>
      <NoticeButton onFetchNews={handleFetchNews} />
    </>
  );
}

export default NoticeCard;
