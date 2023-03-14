import Logo from './../img/logoDatoluz.jpg';
import Letras from './../img/letrasDatoluz.jpg';
import HamburguerMenu from './HamburguerMenu';

const Header = () => {
  return (
    <header className="header">
     <HamburguerMenu></HamburguerMenu>
      <div className="header__div">
        <img className="header__logo" src={Logo} alt="logo img" />
        <img className="header__letter" src={Letras} alt="logo letras" />
      </div>
    </header>
  );
};

export default Header;
