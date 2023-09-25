import './Header';
import '../css-components/Header.css'

function Header(){
  return (
    <header>
      <img className= "trybe-logo" src='imagens/trybeimage.png'></img>
      <div className="header">
        <h1 >TRYBE NEWS</h1>
      </div>
    </header>
  )
}

export default Header;