import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';

import './InputSelect.css';
import ChevronDown from '../../Resources/Icons/chevron-down.svg';

type InputSelectProps = {
  label: string;
  value: string | number;
  selected: any;
  options: any[];
  inputType?: HTMLInputTypeAttribute;
  renderSelect: (selected: any) => JSX.Element;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (value: string) => void;
};

const InputSelect = ({
  label,
  value,
  selected,
  renderSelect,
  onChange,
  onSelect,
  options,
  inputType = 'text'
}: InputSelectProps) => {
  const [selectOpened, setSelectOpened] = useState(false);

  const openSelect = () => {
    setSelectOpened(true);
  };

  return (
    <div className='input-select'>
      <label className='input-select__input'>
        <span className='input-select__label'>{label}</span>
        <input
          type={inputType}
          className='input-select__field'
          onChange={onChange}
          value={value}
        />
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

export default InputSelect;
