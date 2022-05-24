import { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import './TableSearch.css';
import SearchIcon from '../../Resources/Icons/search-icon.svg';

const TableSearch = () => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className='table-search'>
      <Input
        value={value}
        onChange={onChange}
        placeholder='Поиск'
        icon={SearchIcon}
      ></Input>
    </div>
  );
};

export default TableSearch;
