import { useState } from "react";
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
    <div>
      <Header />
      <Main />
      <NavBar currentTab={currentTab} onTabChange={handleTabChange} />
      <Conteudo currentTab={currentTab} />
    </div>
  );
}

export default App
