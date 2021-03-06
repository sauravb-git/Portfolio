import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about__details}>
        <p>
        Hi! I'm Saurav Baura, a dedicated Web Developer. I develop web applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I have graduated with a diploma degree in Computer Science Technology from Chittagong Polytechnic Institute at Chittagong.
        </p>
        <div className={styles.about__cta}>
          <button className={styles.resume}>
            <a href="/latest-resume.pdf" download>
              Get Resume
            </a>
          </button>
          <button className={styles.skills}>
            <a href="#skill">My Skills</a>
          </button>
        </div>
      </div>
      <div className={styles.about__img}>
        <img src="/saurav.jpg" alt="Saurav Barua" />
      </div>
    </div>
  );
};

export default About;
