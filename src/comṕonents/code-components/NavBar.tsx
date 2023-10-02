import '../css-components/NavBar.css'

function NavBar({ currentTab, onTabChange }) {
  return (
    <nav className='container-div-bar'>
      <ul className='container-list-bar'>
        <li
          className={currentTab === 'mais-recentes' ? 'active' : ''}
          onClick={() => onTabChange('mais-recentes')}
        >
          Mais recentes
        </li>
        <li
          className={currentTab === 'release' ? 'active' : ''}
          onClick={() => onTabChange('release')}
        >
          Release
        </li>
        <li
          className={currentTab === 'noticia' ? 'active' : ''}
          onClick={() => onTabChange('noticia')}
        >
          Notícia
        </li>
        <li
          className={currentTab === 'favoritas' ? 'active' : ''}
          onClick={() => onTabChange('favoritas')}
        >
          Favoritas
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
