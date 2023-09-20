import { useState } from "react";
import { fetchApi } from "./Fetch";

function NoticeButton() {
  const [noticias, setNoticias] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleClick = async () => {
    try {
      const data = await fetchApi();
      if (data.items && data.items.length > 0) {
        const newNoticias = data.items.slice(noticias.length, noticias.length + 9);
        setNoticias([...noticias, ...newNoticias]);
        setLoaded(true);
      }
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoaded(false);
    }
  };

  return (
    <>
      <section>
        {noticias.map((noticia, index) => (
          <div key={index}>
            <h3>{noticia.titulo}</h3>
            <p>{noticia.conteudo}</p>
          </div>
        ))}
      </section>
      <button onClick={handleClick} disabled={loaded}>
      {loaded ? "Carregando..." : "Mais Notícias"}
      </button>
    </>
  );
}

export default NoticeButton;
