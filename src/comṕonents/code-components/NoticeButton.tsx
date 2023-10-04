import { useState } from "react";
import '../css-components/NoticeButton.css'

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
    <div className="lern-more-notices-container">
      <button className="learn-more-notices-button" onClick={handleClick} disabled={loaded}>
        {loaded ? "Carregando..." : "MAIS NOTÍCIAS"}
      </button>
    </div>
  );
}

export default NoticeButton;
