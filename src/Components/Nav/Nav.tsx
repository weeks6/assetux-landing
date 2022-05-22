import './Nav.css';

import ChevronDown from '../../Resources/Icons/chevron-down.svg';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__list-item'>
          <a href='#' className='nav__link'>
            Обмен
          </a>
        </li>
        <li className='nav__list-item'>
          <a href='#' className='nav__link'>
            Формы
          </a>
        </li>

        <li className='nav__list-item'>
          <a href='#' className='nav__link'>
            Блог
          </a>
        </li>

        <li className='nav__list-item'>
          <button className='nav__link nav__link-btn'>
            EN / $
            <img
              src={ChevronDown}
              alt='Открыть меню'
              className='nav__link-icon'
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
