import { useState } from 'react';
import './PageLimitSelect.css';

const PageLimitSelect = () => {
  const [active, setActive] = useState(5);
  const options = [5, 100, 500];

  return (
    <div className='page-limit-select__container'>
      {options.map((option, index) => (
        <button
          className={`page-limit-select__button ${
            option === active ? 'page-limit-select__button-active' : ''
          }`}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PageLimitSelect;
