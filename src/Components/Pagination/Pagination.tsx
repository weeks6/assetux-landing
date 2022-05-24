import './Pagination.css';

import ArrowLeft from '../../Resources/Icons/arrow-left.svg';

const Pagination = () => {
  return (
    <div className='pagination__container'>
      <div className='pagination__button pagination__prev pagination__button-disabled'>
        <img src={ArrowLeft} alt='Предыдущая страница' />
      </div>
      <div className='pagination__button pagination__button-active'>1</div>
      <div className='pagination__button'>2</div>
      <div className='pagination__button'>...</div>
      <div className='pagination__button'>25</div>
      <div className='pagination__button pagination__next'>
        <img src={ArrowLeft} alt='Следующая страница' />
      </div>
    </div>
  );
};

export default Pagination;
