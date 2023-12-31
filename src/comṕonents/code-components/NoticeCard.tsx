import React, { useState, useEffect, useContext } from "react";
import { calculateDaysAgo } from "../../utils/dateUtils";
import { fetchApi } from "./Fetch";
import LerMais from "./LerMais";
import NoticeButton from "./NoticeButton";
import { FavoritesContext } from "./FavoriteContext";
import FavoriteImageButton from "../../utils/FavoriteButton";
import '../css-components/NoticeCard.css'

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
      <div className="main-wrapper-container-notice">
        <div className="jr-wrapper-container-notice">
          {noticias.map((noticia) => (
            <div>
              <div className="notice-list" key={noticia.id}>
                <div className="cardNoticeTitle">
                  <h3>{noticia.titulo}</h3>
                </div>
                <div className="cardNoticeDescription">
                  <p>{noticia.introducao}</p>
                </div>
                <div className="dayAndLearn">
                  <p>{calculateDaysAgo(noticia.data_publicacao)}</p>
                  <LerMais link={noticia.link} />
                </div>
              </div>
              <div className="favorite-notice-button-box">
                <FavoriteImageButton
                id={noticia.id}
                isFavorite={isFavorite(noticia.id)}
                toggleFavorite={toggleFavorite}
                titulo={noticia.titulo}
                introducao={noticia.introducao}
                data_publicacao={noticia.data_publicacao}
                link={noticia.link}
              />
              </div>
            </div>
          ))}
        </div>
      </div>
      <NoticeButton onFetchNews={handleFetchNews} />
    </>
  );
}

export default NoticeCard;
