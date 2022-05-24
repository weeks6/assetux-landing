import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import './Input.css';

type InputSelectProps = {
  label?: string;
  value: string | number;
  placeholder?: string;
  inputType?: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
};

const Input = ({
  label,
  onChange,
  value,
  icon,
  placeholder,
  inputType = 'text'
}: InputSelectProps) => {
  return (
    <div className='input'>
      <label className='input__container'>
        <div className='input__input'>
          <span className='input__label'>{label}</span>
          <input
            placeholder={placeholder}
            type={inputType}
            className='input__field'
            onChange={onChange}
            value={value}
          />
        </div>
        <img src={icon} className='input__icon' />
      </label>
    </div>
  );
};

export default Input;
