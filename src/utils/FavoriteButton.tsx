const FavoriteImageButton = ({ id, isFavorite, toggleFavorite, titulo, introducao, data_publicacao, link }) => {
  const handleToggleFavorite = () => {
    toggleFavorite(id, titulo, introducao, data_publicacao, link);
  };

  return (
    <img
      src={isFavorite ? 'imagens/coracao-72.svg' : 'imagens/svgviewer-output(3).svg'}
      alt={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      onClick={handleToggleFavorite}
    />
  );
};

export default FavoriteImageButton;
