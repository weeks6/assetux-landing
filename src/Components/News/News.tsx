import { useState } from 'react';
import './News.css';

import LinkArrow from '../../Resources/Icons/link-arrow.svg';

import NewsImage1 from '../../Resources/Images/news-1.png';
import NewsImage2 from '../../Resources/Images/news-2.png';
import NewsImage3 from '../../Resources/Images/news-3.png';
import NewsImage4 from '../../Resources/Images/news-4.png';

type NewsArticle = {
  img: string;
  title: string;
  description: string;
  date: string;
};

const NewsArticle = ({ date, description, img, title }: NewsArticle) => {
  return (
    <article className='news-article'>
      <img src={img} alt={title} className='news-article__img' />
      <div className='news-article__content'>
        <h4 className='news-article__title'>{title}</h4>
        <p className='news-article__description'>
          {description.substring(0, 100)}...
        </p>
        <div className='news-article__footer'>
          <a href='#' className='news-article__link'>
            <span className='news-article__link-text'>Читать</span>
            <img
              className='news-article__link-img'
              src={LinkArrow}
              alt='Перейти по ссылке в носоть'
            />
          </a>
          <span className='news-article__date'>{date}</span>
        </div>
      </div>
    </article>
  );
};

const News = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([
    {
      img: NewsImage1,
      title: 'The Apple Car Is Coming and Tesla Had Better Watch Out',
      description:
        'The world’s biggest company by market value plans to launch a car with full self-driving capabilities The world’s biggest company by market value plans to launch a car with full self-driving capabilities',
      date: '11:14, 21 марта 2022'
    },
    {
      img: NewsImage2,
      title: 'The Apple Car Is Coming and Tesla Had Better Watch Out',
      description:
        'The world’s biggest company by market value plans to launch a car with full self-driving capabilities The world’s biggest company by market value plans to launch a car with full self-driving capabilities',
      date: '11:14, 21 марта 2022'
    },
    {
      img: NewsImage3,
      title: 'The Apple Car Is Coming and Tesla Had Better Watch Out',
      description:
        'The world’s biggest company by market value plans to launch a car with full self-driving capabilities The world’s biggest company by market value plans to launch a car with full self-driving capabilities',
      date: '11:14, 21 марта 2022'
    },
    {
      img: NewsImage4,
      title: 'The Apple Car Is Coming and Tesla Had Better Watch Out',
      description:
        'The world’s biggest company by market value plans to launch a car with full self-driving capabilities The world’s biggest company by market value plans to launch a car with full self-driving capabilities',
      date: '11:14, 21 марта 2022'
    }
  ]);

  return (
    <section className='news'>
      <div className='news__container'>
        <h2 className='news__title'>Новости</h2>
        <div className='news__news-list'>
          {newsArticles.map((article, index) => (
            <NewsArticle key={index} {...article}></NewsArticle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
