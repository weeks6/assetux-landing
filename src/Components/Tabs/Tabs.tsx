import './Tabs.css';
import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import InputSelect from '../InputSelect/InputSelect';
import Select from '../Select/Select';

import BinanceIcon from '../../Resources/Icons/coin-icon.svg';

type CurrencyOption = {
  key: string;
  label: string;
  title: string;
};

type CryptoOption = {
  key: string;
  label: string;
  title: string;
};

type BlockchainOption = {
  key: string;
  title: string;
  img: string;
};

const Tabs = () => {
  const [activeBuy, setActiveBuy] = useState(true);
  const [activeSell, setActiveSell] = useState(false);

  const [currencyOptions, setCurrencyOptions] = useState<CurrencyOption[]>([
    {
      key: 'rub',
      label: 'Rus ₽',
      title: 'RUB'
    },
    {
      key: 'usb',
      label: 'Usd $',
      title: 'USD'
    }
  ]);

  const [cryptoOptions, setCryptoOptions] = useState<CryptoOption[]>([
    {
      key: 'btc',
      label: 'Bitcoin',
      title: 'BTC'
    },
    {
      key: 'eth',
      label: 'Ethereum',
      title: 'ETH'
    }
  ]);

  const [blockchainOptions, setBlockchainOptions] = useState<
    BlockchainOption[]
  >([
    {
      key: 'binance',
      title: 'Binance Smart Chain',
      img: BinanceIcon
    }
  ]);

  const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const [selectedBlockchain, setSelectedBlockchain] = useState(
    blockchainOptions[0]
  );
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);

  const [withdraw, setWithdraw] = useState(10000);
  const [recieve, setRecieve] = useState(0.0013);

  const [address, setAddress] = useState(
    '0xa291190c69f360E8969F62047de98c3Dc0b87D59'
  );

  const onActivateBuy = () => {
    setActiveBuy(true);
    setActiveSell(false);
  };

  const onActiveSell = () => {
    setActiveBuy(false);
    setActiveSell(true);
  };

  return (
    <div className='tabs'>
      <div className='tabs__header'>
        <button
          className={`tabs__button ${activeBuy && 'tabs__button-active'}`}
          onClick={onActivateBuy}
        >
          Купить криптовалюту
        </button>
        <button
          className={`tabs__button ${activeSell && 'tabs__button-active'}`}
          onClick={onActiveSell}
        >
          Продать криптовалюту
        </button>
      </div>
      <div className='tabs__content'>
        <form className='tabs__form' onSubmit={(evt) => evt.preventDefault()}>
          <Select
            selected={selectedBlockchain}
            options={blockchainOptions}
            onSelect={() => {}}
            label='Блокчейн'
            renderSelect={(selected: BlockchainOption) => (
              <div className='select__item'>
                <img
                  src={selected.img}
                  alt={selected.title}
                  className='select__image'
                />
              </div>
            )}
          ></Select>
          <InputSelect
            label='Отдаешь'
            inputType='number'
            onChange={(event) => {
              setWithdraw(Number(event.target.value));
            }}
            onSelect={() => {}}
            options={currencyOptions}
            renderSelect={(selected: CurrencyOption) => (
              <label className='input-select__input'>
                <span className='input-select__label'>{selected.label}</span>
                <span className='input-select__field'>{selected.title}</span>
              </label>
            )}
            selected={selectedCurrency}
            value={withdraw}
          ></InputSelect>
          <div className='tabs__info'>
            <span className='tabs__info-text'>1 BCT = 4,308,216.43 RUB</span>
            <span className='tabs__info-accent'>Все комисссии включены</span>
          </div>
          <InputSelect
            label='Получаешь'
            inputType='number'
            onChange={(event) => {
              setRecieve(Number(event.target.value));
            }}
            onSelect={() => {}}
            options={cryptoOptions}
            renderSelect={(selected: CryptoOption) => (
              <label className='input-select__input'>
                <span className='input-select__label'>{selected.label}</span>
                <span className='input-select__field'>{selected.title}</span>
              </label>
            )}
            selected={selectedCrypto}
            value={recieve}
          ></InputSelect>
          <div className='tabs__info'>
            <span className='tabs__info-text'>
              Пожалуйста, убедитесь, что ваш кошелек поддерживает выбранную сеть
            </span>
            <button className='tabs__info-btn' type='button'>
              ?
            </button>
          </div>
          <Input
            label='Адрес кошелька'
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          ></Input>
          <Button
            className='tabs__form-submit'
            type='submit'
            title='Продолжить'
          />
        </form>
      </div>
    </div>
  );
};

export default Tabs;
