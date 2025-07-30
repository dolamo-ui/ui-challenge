
// Hero.tsx

import styles from './Hero.module.css';
import vanillaCan from '../assests/vanilla.png'; // 👈 import image from src/assets

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.heroText}>
      <h1>A New Kind of Soda<sup>™</sup></h1>
      <a href="#" className={`${styles.btn} ${styles.shopBtn}`}>Shop OLIPOP</a>
    </div>
    <div className={styles.heroCircle}>
      <img src={vanillaCan} alt="OLIPOP Can" className={styles.canImage} />
    </div>
  </section>
);

export default Hero;
