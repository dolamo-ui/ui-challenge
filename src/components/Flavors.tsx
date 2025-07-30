
import styles from './Flavors.module.css';

import gingerImg from '../assests/ginger.png';
import grapeImg from '../assests/grape.png';
import orangeImg from '../assests/orange.png';
import punchImg from '../assests/punch.png';

const Flavors = () => (
  <section className={styles.flavorSection}>
    <h2>Taste Your Favourite</h2>
    <p>Enjoy our take on the classic flavors you know and love.</p>

    <div className={styles.flavorCards}>
      <div className={`${styles.flavorCard} ${styles.ginger}`}>
        <img src={gingerImg} alt="Ginger Lemon" className={styles.flavorImg} />
        <h3>Ginger Lemon</h3>
        <span className={`${styles.price} ${styles.priceGinger}`}>$34.99</span>
      </div>

      <div className={`${styles.flavorCard} ${styles.grape}`}>
        <img src={grapeImg} alt="Classic Grape" className={styles.flavorImg} />
        <h3>Classic Grape</h3>
        <span className={`${styles.price} ${styles.priceGrape}`}>$34.99</span>
      </div>

      <div className={`${styles.flavorCard} ${styles.orange}`}>
        <img src={orangeImg} alt="Orange Squeeze" className={styles.flavorImg} />
        <h3>Orange Squeeze</h3>
        <span className={`${styles.price} ${styles.priceOrange}`}>$34.99</span>
      </div>

      <div className={`${styles.flavorCard} ${styles.punch}`}>
        <img src={punchImg} alt="Tropical Punch" className={styles.flavorImg} />
        <h3>Tropical Punch</h3>
        <span className={`${styles.price} ${styles.pricePunch}`}>$34.99</span>
      </div>
    </div>
  </section>
);

export default Flavors;
