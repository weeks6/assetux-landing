import './Investments.css';

import Slider from '../Slider/Slider';

import AppStoreLogo from '../../Resources/Images/app-store-logo.png';
import PlayStoreLogo from '../../Resources/Images/play-store-logo.png';
import QrImage from '../../Resources/Images/qr.png';

const Investments = () => {
  return (
    <section className='investments'>
      <div className='investments__container container__main'>
        <div className='investments__content'>
          <h2 className='investments__title'>Инвестиции</h2>
          <p className='investments__description'>
            Инвестируй в тренды с помощью портфелей, упакованных валютами
            финансовых сервисов, криптоигр, топ коинов и метавселенных. Портфели
            созданы для легкости инвестирования в целые сферы с потенциалами
            многократного роста.
          </p>
          <div className='investments__links'>
            <div className='investments__apps'>
              <a href='#' className='investments__apps-link'>
                <img
                  src={PlayStoreLogo}
                  alt='Скачать в Play Store'
                  className='investments__app-link'
                />
              </a>
              <a href='#' className='investments__apps-link'>
                <img
                  src={AppStoreLogo}
                  alt='Скачать в App Store'
                  className='investments__app-link'
                />
              </a>
            </div>
            <div className='investments__qr'>
              <img src={QrImage} alt='Откройте камеру и направьте на QR код' />
            </div>
          </div>
        </div>
        <div className='investments__slider'>
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Investments;
