
import styles from './Benefits.module.css';
import productImg from '../assests/product.png'; // Adjust path if needed

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faGlassWater, faTruck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => (
  <section className={styles.benefits}>
    <div className={styles.benefitItems}>

      <div className={styles.benefitGroup}>
        <div className={styles.benefitRow}>
          <div className={styles.benefitIcon}>
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
          <span>Save 15% on every order</span>
        </div>

        <div className={styles.benefitRow}>
          <div className={styles.benefitIcon}>
            <FontAwesomeIcon icon={faGlassWater} />
          </div>
          <span>Early access to new flavors</span>
        </div>
      </div>

      <div>
        <img src={productImg} alt="Product" className={styles.benefitImage} />
      </div>

      <div className={styles.benefitGroup}>
        <div className={styles.benefitRow}>
          <div className={styles.benefitIcon}>
            <FontAwesomeIcon icon={faTruck} />
          </div>
          <span>Free Shipping, Always</span>
        </div>

        <div className={styles.benefitRow}>
          <div className={styles.benefitIcon}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <span>Swap, skip or cancel any time</span>
        </div>
      </div>

    </div>
  </section>
);

export default Benefits;
