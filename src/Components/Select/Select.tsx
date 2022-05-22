import { useState } from 'react';

import './Select.css';
import ChevronDown from '../../Resources/Icons/chevron-down.svg';

type InputSelectProps = {
  label: string;
  selected: any;
  options: any[];
  renderSelect: (selected: any) => JSX.Element;
  onSelect: (value: string) => void;
};

const Select = ({
  label,
  selected,
  renderSelect,
  onSelect,
  options
}: InputSelectProps) => {
  const [selectOpened, setSelectOpened] = useState(false);

  const openSelect = () => {
    setSelectOpened(true);
  };

  return (
    <div className='input-select'>
      <label className='input-select__input'>
        <span className='input-select__label'>{label}</span>
        <span className='input-select__field'>{selected.title}</span>
      </label>
      <label className='input-select__select' onClick={openSelect}>
        <div className='input-select__selected'>
          {renderSelect && renderSelect(selected)}
        </div>
        <img src={ChevronDown} alt='Открыть опции' />
      </label>
    </div>
  );
};

export default Select;
