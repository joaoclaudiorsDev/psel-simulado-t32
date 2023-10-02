import { useContext, useEffect, useState } from "react";
import { calculateDaysAgo } from "../../utils/dateUtils";
import {fetchApi} from "./Fetch";
import LerMais from "./LerMais";
import '../css-components/Main.css'
import FavoriteImageButton from "../../utils/FavoriteButton";
import { FavoritesContext } from "./FavoriteContext";

function Main() {
  const [latestNews, setLatestNews] = useState(null);
  const imageDetails = JSON.parse('{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PPM_THUMB_Jaelson-Lucas-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PPM_HOME_Jaelson-Lucas-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}');
  const introImageUrl = `https://agenciadenoticias.ibge.gov.br/${imageDetails.image_intro}`;
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApi();
        if (data.items && data.items.length > 0) {
          setLatestNews(data.items[0]);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {latestNews ? (
        <div className="container-main-div">
          <img src={introImageUrl} alt="Imagem da notícia"  className="favoriteNoticeImg"/>
          <div className="container-main-notice">
            <div className="recent-notice-and-favorite-button">
              <h3 id="recent-notice-title">Notícia mais recente</h3>
              <FavoriteImageButton
                id={latestNews.id}
                isFavorite={isFavorite(latestNews.id)}
                toggleFavorite={toggleFavorite}
                titulo={latestNews.titulo}
                introducao={latestNews.introducao}
                data_publicacao={latestNews.data_publicacao}
                link={latestNews.link}
              />
            </div>
            <h2>{latestNews.titulo}</h2>
            <p>{latestNews.introducao}</p>
            <div className="dayAndLearn">
              <p className="dayAgo">{calculateDaysAgo(latestNews.data_publicacao)}</p>
              <LerMais link={latestNews.link} />
            </div>
          </div>
        </div>
      ) : (
        <p>Carregando notícia mais recente...</p>
      )}
    </main>
  );
}

export default Main;
