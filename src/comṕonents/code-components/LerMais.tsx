import { useRef } from 'react';
import '../css-components/LearnMoreNotice.css'

const LerMais = ({ link }) => {
  const linkRef = useRef(null);

  const handleClick = () => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <span className="learnMoreNotice" onClick={handleClick}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Leia a notícia aqui
      </a>
    </span>
  );
};
  
  export default LerMais;