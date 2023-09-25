import { useContext } from "react";
import { FavoritesContext } from "../comṕonents/code-components/FavoriteContext";

const RemoveFavoriteImageButton = ({ id }) => {
    const { removeFavorite } = useContext(FavoritesContext);
  
    const handleRemoveFavorite = () => {
      removeFavorite(id);
    };
  
    return (
      <img
        src="imagens/coracao-72.svg"
        alt="Remover dos favoritos"
        onClick={handleRemoveFavorite}
      />
    );
  };
  
  export default RemoveFavoriteImageButton;