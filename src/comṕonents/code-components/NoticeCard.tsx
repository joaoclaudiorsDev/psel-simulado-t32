import React, { useState, useEffect } from "react";

import { fetchApi } from "./Fetch";

function NoticeCard() {
  const [noticias, setNotices] = useState([]);

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

  return (
    <div>
      <h2>Mais recentes</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id}>
          <h3>{noticia.titulo}</h3>
          <p>{noticia.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default NoticeCard;