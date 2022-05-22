import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container container__main'>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
