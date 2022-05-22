import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import './Input.css';

type InputSelectProps = {
  label: string;
  value: string | number;
  inputType?: HTMLInputTypeAttribute;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  label,
  onChange,
  value,
  inputType = 'text'
}: InputSelectProps) => {
  return (
    <div className='input'>
      <label className='input__input'>
        <span className='input__label'>{label}</span>
        <input
          type={inputType}
          className='input__field'
          onChange={onChange}
          value={value}
        />
      </label>
    </div>
  );
};

export default Input;
