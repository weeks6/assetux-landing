import './Logo.css';

import LogoImage from '../../Resources/Images/logo.svg';

const Logo = () => {
  return (
    <div className='logo'>
      <img src={LogoImage} alt='Логотип Assetux' className='logo__image' />
    </div>
  );
};

export default Logo;
