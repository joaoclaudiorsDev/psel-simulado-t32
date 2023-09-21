import { useEffect, useState } from "react";
import {fetchApi} from "./Fetch";

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
      <h2>Notícia Mais Recente:</h2>
      {latestNews ? (
        <>
          <h3>{latestNews.titulo}</h3>
          <p>{latestNews.introducao}</p>
            <img src={introImageUrl} alt="Imagem da notícia" />
        </>
      ) : (
        <p>Carregando notícia mais recente...</p>
      )}
    </main>
  );
}

export default Main;
