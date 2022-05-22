import './Footer.css';

import TelegramIcon from '../../Resources/Icons/telegram-icon.svg';
import EmailIcon from '../../Resources/Icons/email-icon.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container__main'>
        <div className='footer__link-lists'>
          <ul className='footer__links'>
            <li className='footer__links-item footer__links-header'>
              Компания
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                О компании
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                Новости
              </a>
            </li>
          </ul>
          <ul className='footer__links'>
            <li className='footer__links-item footer__links-header'>
              Популярное
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                RUB в BTC
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                RUB в ETH
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                RUB в BNB
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                RUB в CAKE
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                RUB в USDT
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                RUB в BUSD
              </a>
            </li>
          </ul>
          <ul className='footer__links'>
            <li className='footer__links-item footer__links-header'>
              Документы
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                Политика конфиденциальности
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                Политика использования файлов Cookie
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='#' className='footer__link'>
                Правила и условия
              </a>
            </li>
          </ul>
          <ul className='footer__links'>
            <li className='footer__links-item footer__links-header'>
              Социальные сети
            </li>
            <li className='footer__links-item'>
              <a href='https://t.me/assetux' className='footer__link'>
                <img
                  src={TelegramIcon}
                  alt='Телеграм'
                  className='footer__link-icon'
                />
                <div className='footer__link-content'>
                  <span className='footer__link-label'>Telegram Channel</span>
                  <span className='footer__link-text'>@assetux</span>
                </div>
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='https://t.me/assetux_support' className='footer__link'>
                <img
                  src={TelegramIcon}
                  alt='Телеграм'
                  className='footer__link-icon'
                />
                <div className='footer__link-content'>
                  <span className='footer__link-label'>Telegram Support</span>
                  <span className='footer__link-text'>@assetux_support</span>
                </div>
              </a>
            </li>
          </ul>
          <ul className='footer__links'>
            <li className='footer__links-item footer__links-header'>
              Социальные сети
            </li>
            <li className='footer__links-item'>
              <a href='https://t.me/assetux_chat' className='footer__link'>
                <img
                  src={TelegramIcon}
                  alt='Телеграм'
                  className='footer__link-icon'
                />
                <div className='footer__link-content'>
                  <span className='footer__link-label'>Telegram Chat</span>
                  <span className='footer__link-text'>@assetux_chat</span>
                </div>
              </a>
            </li>
            <li className='footer__links-item'>
              <a href='mailto://support@assetux.com' className='footer__link'>
                <img
                  src={EmailIcon}
                  alt='Email'
                  className='footer__link-icon'
                />
                <div className='footer__link-content'>
                  <span className='footer__link-label'>Email</span>
                  <span className='footer__link-text'>support@assetux.com</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
