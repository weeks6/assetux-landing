import './Slider.css';
import { useEffect, useState } from 'react';
import Slide1 from '../../Resources/Images/investment-1.png';
import Slide2 from '../../Resources/Images/investment-2.png';

import ArrowUp from '../../Resources/Icons/slider-prev.svg';
import ArrowDown from '../../Resources/Icons/slider-next.svg';

type SliderProps = {};
const Slider = ({}: SliderProps) => {
  const slides = [
    {
      img: Slide2
    },
    {
      img: Slide1
    },
    {
      img: Slide2
    }
  ];

  const [prev, setPrev] = useState(0);
  const [active, setActive] = useState(1);
  const [next, setNext] = useState(2);

  useEffect(() => {
    setPrev(active === 0 ? 2 : active - 1);
    setNext(active === slides.length - 1 ? 0 : active + 1);
  }, [active]);

  const onPrevSlide = () => {
    if (active === 0) {
      setActive(slides.length - 1);
    } else {
      setActive(active - 1);
    }
  };

  const onNextSlide = () => {
    if (active === slides.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  };

  return (
    <div className='slider'>
      <div className='slider__container'>
        <button className='slider__control slider__prev'>
          <img src={ArrowUp} alt='Предыдущий слайд' onClick={onPrevSlide} />
        </button>
        <button className='slider__control slider__next'>
          <img src={ArrowDown} alt='Следующий слайд' onClick={onNextSlide} />
        </button>

        {slides.map((slide, index) => (
          <div
            className={`slide ${active === index && 'active'} ${
              prev === index && 'prev'
            } ${next === index && 'next'}`}
            key={index}
          >
            <img src={slide.img} alt={`Слайд #${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
