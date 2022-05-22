import './Hero.css';

import ArrowLeft from '../../Resources/Icons/arrow-left.svg';

import PartnerImageBinance from '../../Resources/Images/binance-logo.png';
import PartnerImageAvalanche from '../../Resources/Images/avalanche-logo.png';
import PartnerImageFantom from '../../Resources/Images/fantom-logo.png';
import Tabs from '../Tabs/Tabs';

const Hero = () => {
  const partners = [
    {
      alt: 'Партнер Binance',

      image: PartnerImageBinance
    },
    {
      alt: 'Партнер Avalanche',
      image: PartnerImageAvalanche
    },
    {
      alt: 'Партнер Fantom',
      image: PartnerImageFantom
    }
  ];

  return (
    <section className='hero'>
      <div className='hero__container container__main'>
        <section className='hero__content'>
          <h1 className='hero__title'>
            Лучший способ <span className='hero__title-green'>покупать</span> и{' '}
            <span className='hero__title-red'>продавать</span> криптовалюты
          </h1>
          <p className='hero__description'>
            Первая фиатно-криптовалютная биржа, построенная на взаимодействующем
            DeFi
          </p>
          <div className='hero__partners'>
            {partners.map((partner, index) => (
              <img
                src={partner.image}
                key={index}
                alt={partner.alt}
                className='hero__partner'
              ></img>
            ))}
            <a href='#' className='link hero__partner-link'>
              <div className='link__chip'>
                <img src={ArrowLeft} alt='Перейти к партнерам' />
              </div>
            </a>
          </div>
        </section>
        <section className='hero__actions'>
          <div className='hero__tabs'>
            <Tabs />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
