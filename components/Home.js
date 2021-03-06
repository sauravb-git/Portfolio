import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <p className={styles.greetings}>Hello! I am</p>
      <h1 className={styles.title}>Saurav Barua</h1>
      <h4 className={styles.subtitle}>MERN Stack Developer</h4>
      <p className={styles.designation}>
        Web Developer
        <img src="/circle.svg" width="10" alt="" />
        Programmer
        <img src="/circle.svg" width="10" alt="" />
        Software Engineer
      </p>
      <div className={styles.social}>
        <a href="https://github.com/sauravb-git" target="_blank">
          <img src="/github.svg" width="30" alt="" />
        </a>
        <a href="https://facebook.com/sauravbweb" target="_blank">
          <img src="/facebook.svg" width="30" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/sauravweb/" target="_blank">
          <img src="/linkedin.svg" width="30" alt="" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=8801881201639"
          target="_blank"
        >
          <img src="/whatsapp.svg" width="30" alt="" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8801881201639" >Send Message</a>
      </div>
      <div className={styles.cta}>
        <button className={styles.resume}>
          <a href="/latest-resume.pdf" download>
            Get Resume
          </a>
        </button>
        <button className={styles.aboutMe}>
          <a href="#about">About Me</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
