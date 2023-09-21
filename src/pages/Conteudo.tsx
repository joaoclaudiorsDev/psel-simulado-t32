import NoticeCard from "../comṕonents/code-components/NoticeCard";
import Favoritas from "./Favoritas";
import Noticia from "./Noticia";
import Release from "./Release";

function Notices({ currentTab }){

  const renderContent = () => {
    switch (currentTab) {
      case 'mais-recentes':
        return <NoticeCard />;
      // case 'release':
      //   return <Release />;
      // case 'noticia':
      //   return <Noticia />;
      // case 'favoritas':
      //   return <Favoritas />;
      default:
        return null;
    }
  };
  return (
    <div>
      {renderContent()}
    </div>
  );
}

export default Notices;