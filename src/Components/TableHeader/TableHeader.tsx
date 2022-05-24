import './TableHeader.css';

import ChevronDown from '../../Resources/Icons/chevron-down-gray.svg';

type HeaderItem = {
  sort: boolean;
  label?: string;
  key: string;
};

type TableConfig = {
  header: HeaderItem[];
};

const TableHeader = ({ header }: TableConfig) => {
  return (
    <>
      {header.map((item, index) => (
        <div
          key={index}
          className={`table-header__item ${
            index === 0 ? 'table-content-item__id' : ''
          }`}
        >
          <div className='table-header__item-title'>{item.label}</div>
          {item.sort && <img src={ChevronDown}></img>}
        </div>
      ))}
    </>
  );
};

export default TableHeader;
