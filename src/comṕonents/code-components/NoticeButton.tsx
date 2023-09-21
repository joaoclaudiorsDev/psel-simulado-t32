import { useState } from "react";

function NoticeButton({ onFetchNews }) {
  const [loaded, setLoaded] = useState(false);

  const handleClick = async () => {
    try {
      setLoaded(true);
      await onFetchNews();
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    } finally {
      setLoaded(false);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loaded}>
        {loaded ? "Carregando..." : "Mais Notícias"}
      </button>
    </div>
  );
}

export default NoticeButton;
