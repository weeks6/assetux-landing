import Button from '../Button/Button';
import './About.css';

import AboutImage from '../../Resources/Images/about.png';

const About = () => {
  return (
    <section className='about'>
      <div className='about__container container__main'>
        <div className='about__content'>
          <h2 className='about__title'>О компании</h2>
          <p className='about__description'>
            ASSETUX создает и внедряет инструменты улучшающие взаимодействие
            пользователей с криптовалютой, помогающие исключить ошибки, которые
            могут совершить пользователи, выполняя многое автоматизированно,
            значительно экономя их время.
          </p>
          <p className='about__description'>
            ASSETUX предлагает быстрые способы: <br />
            – Покупки крипты с карты;
            <br />
            – Продажи крипты с выводом денег на карту; <br />– Молниеносный
            способ инвестирования в целые сферы.
          </p>
          <Button title='Подробнее' className='about__action' />
        </div>
        <img
          className='about__image'
          src={AboutImage}
          alt='Деократиное изображение различных криптовалют'
        />
      </div>
    </section>
  );
};

export default About;
