import { useEffect, useState } from "react";
import {fetchApi} from "./Fetch";

function Main() {
  const [latestNews, setLatestNews] = useState(null);
  
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
          <p>{latestNews.conteudo}</p>
        </>
      ) : (
        <p>Carregando notícia mais recente...</p>
      )}
    </main>
  );
}

export default Main;
