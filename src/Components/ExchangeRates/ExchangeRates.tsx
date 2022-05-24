import './ExchangeRates.css';

import CoinIcon from '../../Resources/Icons/coin-icon.svg';
import NegChange from '../../Resources/Images/neg-change.svg';
import PosChange1 from '../../Resources/Images/pos-change-1.svg';
import PosChange2 from '../../Resources/Images/pos-change-2.svg';
import { useEffect, useState } from 'react';

type ExchangeRateProps = {
  title: string;
  value: string;
  change: string;
  image: string;
  direction: 'positive' | 'negative';
};

const ExchangeRate = ({
  title,
  change,
  direction,
  value,
  image
}: ExchangeRateProps) => {
  const [showActions, setShowActions] = useState(false);

  const onMouseEnter = () => {
    setShowActions(true);
  };

  const onMouseLeave = () => {
    setShowActions(false);
  };

  return (
    <div
      className={`exchange-rate ${
        showActions ? 'show-actions' : 'hide-actions'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className='exchange-rate__header'>
        <div className='exchange-rate__title'>
          <div className='exchange-rate__icon'>
            <img src={CoinIcon} />
          </div>
          <h4 className='exchange-rate__title-text'>{title}</h4>
        </div>
        <div className='exchange-rate__value'>{value}</div>
      </div>
      <div className='exchange-rate__content'>
        <div className='exchange-rate__content-text'>
          <div className={`exchange-rate__change ${direction}`}>{change}</div>
          <div className='exchange-rate__info'>Изменения за 24 часа</div>
        </div>
        <img src={image} alt='' className='exchange-rate__image' />
      </div>
      {showActions && (
        <div className='exchange-rate__actions'>
          <button className='exchange-rate__action sell'>Купить</button>
          <button className='exchange-rate__action buy'>Продать</button>
        </div>
      )}
    </div>
  );
};

const ExchangeRates = () => {
  const rates: ExchangeRateProps[] = [
    {
      title: 'BNB',
      value: '$490',
      change: '-3,01%',
      direction: 'negative',
      image: NegChange
    },
    {
      title: 'AVAX',
      value: '$294',
      change: '+3,01%',
      direction: 'positive',
      image: PosChange1
    },
    {
      title: 'FTM',
      value: '$92',
      change: '+1,32%',
      direction: 'positive',
      image: PosChange2
    },
    {
      title: 'SOL',
      value: '$92',
      change: '+0.3%',
      direction: 'positive',
      image: PosChange1
    }
  ];

  return (
    <section className='exchange-rates'>
      <div className='exchange-rates__container'>
        <div className='exchange-rates__list'>
          {rates.map((rate, index) => (
            <ExchangeRate {...rate} key={index}></ExchangeRate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExchangeRates;
