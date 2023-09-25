import { useState } from "react";
import { FavoritesProvider } from "./comṕonents/code-components/FavoriteContext";
import Header from "./comṕonents/code-components/Header"
import Main from "./comṕonents/code-components/Main"
import NavBar from "./comṕonents/code-components/NavBar";
import Conteudo from "./pages/Conteudo";

function App() {
  const [currentTab, setCurrentTab] = useState('mais-recentes');

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <FavoritesProvider>
      <div>
        <Header />
        <Main />
        <NavBar currentTab={currentTab} onTabChange={handleTabChange} />
        <Conteudo currentTab={currentTab} />
      </div>
    </FavoritesProvider>
  );
}

export default App
