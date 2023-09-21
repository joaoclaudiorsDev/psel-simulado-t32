import React from 'react';

function NavBar({ currentTab, onTabChange }) {
  return (
    <nav>
      <ul>
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
