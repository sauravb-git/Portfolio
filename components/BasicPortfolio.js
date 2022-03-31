import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = ({ name, details, img, links, tools }) => {
  return (
    <div className={styles.portfolio}>
      <div style={{ marginTop: '0px' }} className={styles.details}>
        <h4>{name}</h4>
        <p>{details}</p>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={links.githubLink} target="_blank">
                <img src="/github.svg" alt="Github" />
              </a>
            </li>
            <li>
              <a href={links?.websiteLink} target="_blank">
                <img src="/link.svg" alt="Github" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.tools}>
          <ul>
            {tools?.length > 0 &&
              tools?.map((tool, i) => <li key={i}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PortfolioFeatured = () => {
  return (
    <div className={`${styles.portfolioItems} ${styles.portfolioFeatured}`}>
      <Portfolio
        name="Twitter Media"
        details="This is Twitter media. Here people can share their stories and other people can like, comments on the post."
        links={{
          githubLink: 'https://github.com/sauravb-git/twitter-clone',
          websiteLink: 'https://twitter-91230.web.app',
        }}
        tools={['react', 'redux', 'firebase']}
      />
      <Portfolio
        name="Instagram Media"
        details="This is Instagram media. Here people can share their stories and other people can like, comments on the post."
        links={{
          githubLink: 'https://github.com/sauravb-git/instagram-clone',
          websiteLink: 'https://instagram-6a06f.web.app/',
        }}
        tools={['react', 'redux', 'firebase']}
      />
      <Portfolio
        name="Covid Tracker"
        details="This is covid 19 tracker. Every day we can get updated results in this application. Also, we can see the country-wise data."
        links={{
          githubLink: 'https://github.com/sauravb-git/covid-19-tracker',
          websiteLink: 'https://covid-19-tracker-d1967.web.app',
        }}
        tools={['react', 'redux', 'firebase']}
      />
       <Portfolio
        name="Travel Guru"
        details="Travel Guru is a traveling project. User can book there hotel. This project developed by React JS and Firebase. Feel free to clone."
        links={{
          githubLink: 'https://github.com/sauravb-git/travel-guru',
          websiteLink: 'https://travel-guru-95248.web.app',
        }}
        tools={['react', 'redux', 'firebase']}
      />

      <Portfolio
        name="Pizza App"
        details="This is online food ordering website. Here can order food in online and pay the bill using stripe."
        links={{
          githubLink: 'https://github.com/sauravb-git/pizza',
          websiteLink: 'https://saurav-pizza.herokuapp.com/',
        }}
        tools={['react', 'redux', 'express', 'cors','stripe']}
      />
      <Portfolio
        name="Blog App"
        details="This  Blog Application Useing Laravel "
        links={{
          githubLink: 'https://github.com/sauravb-git/blog-laravel', 
        }}
        tools={['laravel 8']}
      />
    </div>
  );
};

export default PortfolioFeatured;
