import './CryptoExplorer.css';

import ChevronDown from '../../Resources/Icons/chevron-down-gray.svg';
import CoinIcon from '../../Resources/Icons/coin-icon.svg';

import Input from '../Input/Input';
import ChipButton from '../ChipButton/ChipButton';
import TableSearch from '../TableSearch/TableSearch';
import TableHeader from '../TableHeader/TableHeader';
import PageLimitSelect from '../PageLimitSelect/PageLimitSelect';
import Pagination from '../Pagination/Pagination';

const CryptoExploerer = () => {
  const links = [
    {
      key: 'all',
      title: 'Все',
      link: '#',
      active: true
    },
    {
      key: 'binance',
      title: 'Binance SC',
      link: '#',
      active: false
    },
    {
      key: 'matic',
      title: 'Matic (Polygon)',
      link: '#',
      active: false
    },
    {
      key: 'fantom',
      title: 'Fantom',
      link: '#',
      active: false
    },
    {
      key: 'balancer',
      title: 'Balancer',
      link: '#',
      active: false
    }
  ];

  const tableHeader = [
    {
      key: 'id',
      label: '№',
      sort: false
    },
    {
      key: 'ticker',
      label: 'Тикер',
      sort: true
    },
    {
      key: 'price',
      label: 'Последняя цена $',
      sort: true
    },
    {
      key: 'price_token',
      label: 'Цена в ASSETUX $',
      sort: true
    },
    {
      key: 'change',
      label: 'Изменения за 24 часа',
      sort: true
    },
    {
      key: 'volume',
      label: 'Объём за 24 часа',
      sort: true
    },
    {
      key: 'action',
      sort: false
    }
  ];

  const tableData = [
    [
      {
        key: 'id',
        value: 1,
        icon: CoinIcon
      },
      {
        key: 'ticker',
        value: 'LTE/RUB'
      },
      {
        key: 'price',
        value: '0.0000001'
      },
      {
        key: 'price_token',
        value: '0.0000001'
      },
      {
        key: 'change',
        value: '+0.00%'
      },
      {
        key: 'volume',
        value: '$13.432'
      }
    ],
    [
      {
        key: 'id',
        value: 2,
        icon: CoinIcon
      },
      {
        key: 'ticker',
        value: 'LTE/RUB'
      },
      {
        key: 'price',
        value: '0.0000001'
      },
      {
        key: 'price_token',
        value: '0.0000001'
      },
      {
        key: 'change',
        value: '+0.00%'
      },
      {
        key: 'volume',
        value: '$13.432'
      }
    ],
    [
      {
        key: 'id',
        value: 3,
        icon: CoinIcon
      },
      {
        key: 'ticker',
        value: 'LTE/RUB'
      },
      {
        key: 'price',
        value: '0.0000001'
      },
      {
        key: 'price_token',
        value: '0.0000001'
      },
      {
        key: 'change',
        value: '+0.00%'
      },
      {
        key: 'volume',
        value: '$13.432'
      }
    ],
    [
      {
        key: 'id',
        value: 4,
        icon: CoinIcon
      },
      {
        key: 'ticker',
        value: 'LTE/RUB'
      },
      {
        key: 'price',
        value: '0.0000001'
      },
      {
        key: 'price_token',
        value: '0.0000001'
      },
      {
        key: 'change',
        value: '+0.00%'
      },
      {
        key: 'volume',
        value: '$13.432'
      }
    ],
    [
      {
        key: 'id',
        value: 5,
        icon: CoinIcon
      },
      {
        key: 'ticker',
        value: 'LTE/RUB'
      },
      {
        key: 'price',
        value: '0.0000001'
      },
      {
        key: 'price_token',
        value: '0.0000001'
      },
      {
        key: 'change',
        value: '+0.00%'
      },
      {
        key: 'volume',
        value: '$13.432'
      }
    ]
  ];

  return (
    <section className='crypto-explorer'>
      <div className='crypto-explorer__container container__main'>
        <div className='crypto-explorer__header'>
          <h2 className='heading'>Крипто обозреваль</h2>
          <a href='#' className='link__accent'>
            Смотреть еще
          </a>
        </div>
        <div className='crypto-explorer__table-header'>
          <div className='crypto-explorer__links'>
            {links.map((link, index) => (
              <ChipButton
                key={index}
                title={link.title}
                href={link.link}
                active={link.active}
              ></ChipButton>
            ))}
            <ChipButton title='Ещё'>
              <img src={ChevronDown} alt='Открыть меню' />
            </ChipButton>
          </div>
          <TableSearch></TableSearch>
        </div>
        <div className='crypto-explorer__table-container'>
          <div className='table-grid crypto-explorer__table'>
            <TableHeader header={tableHeader}></TableHeader>
            {tableData.map((row, rowIndex) => {
              return row.map((item, index) => {
                return (
                  <>
                    <div
                      key={`${rowIndex}_${index}`}
                      className={`table-content-item ${
                        index === 0 ? 'table-content-item__id' : ''
                      }`}
                    >
                      {item.value}

                      {index === 0 && (
                        <div className='table-id'>
                          <div className='table-id__container'>
                            <div className='table-id__icon'>
                              <img src={item.icon} />
                            </div>
                            <div className='table-id__icon table-id__icon-upper'>
                              <img src={item.icon} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {index === row.length - 1 && (
                      <div
                        className='table-actions'
                        key={`${rowIndex}_${index + 1}`}
                      >
                        <button className='table-action table-action__buy'>
                          Купить
                        </button>
                        <button className='table-action table-action__sell'>
                          Продать
                        </button>
                      </div>
                    )}
                  </>
                );
              });
            })}
          </div>
        </div>
        <div className='cryptop-explorer__table-footer'>
          <PageLimitSelect></PageLimitSelect>
          <Pagination></Pagination>
        </div>
      </div>
    </section>
  );
};

export default CryptoExploerer;
