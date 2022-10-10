import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.jpeg';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.jpeg';
import IMG5 from '../../assets/portfolio5.jpeg';
import IMG6 from '../../assets/portfolio6.jpeg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Treasures Bakery Ecommerce',
    github: 'https://github.com/lebotreasure/Treasure-s-Bakery',
    demo: 'https://treasures-bakery.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Treasures Bakery Ecommerce',
    github: 'https://github.com/lebotreasure/lebotreasure.github.io',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Treasures Bakery Ecommerce',
    github: 'https://github.com/lebotreasure/lebotreasure.github.io',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Treasures Bakery Ecommerce',
    github: 'https://github.com/lebotreasure/lebotreasure.github.io',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Treasures Bakery Ecommerce',
    github: 'https://github.com/lebotreasure/lebotreasure.github.io',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Treasures Bakery Ecommerce',
    github: 'https://github.com/lebotreasure/lebotreasure.github.io',
    demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio