import { useEffect, useState } from "react";
import { calculateDaysAgo } from "../../utils/dateUtils";
import {fetchApi} from "./Fetch";
import LerMais from "./LerMais";

function Main() {
  const [latestNews, setLatestNews] = useState(null);
  const imageDetails = JSON.parse('{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PPM_THUMB_Jaelson-Lucas-AEN-PR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_09\\/PPM_HOME_Jaelson-Lucas-AEN-PR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}');
  const introImageUrl = `https://agenciadenoticias.ibge.gov.br/${imageDetails.image_intro}`;

  
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
        <>
          <img src={introImageUrl} alt="Imagem da notícia" />
          <h3>Notícia Mais Recente</h3>
          <h2>{latestNews.titulo}</h2>
          <p>{latestNews.introducao}</p>
          <p>{calculateDaysAgo(latestNews.data_publicacao)}</p>
          <LerMais link={latestNews.link} />
        </>
      ) : (
        <p>Carregando notícia mais recente...</p>
      )}
    </main>
  );
}

export default Main;
