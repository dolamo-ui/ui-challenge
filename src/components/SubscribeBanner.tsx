// SubscribeBanner.tsx

import styles from './SubscribeBanner.module.css';

const SubscribeBanner = () => (
  <section className={styles.subscribeBanner}>
    <div className="container">
      <h2>|Save 15% with Endless OLIPOP</h2>
      <p>Never run out of your favourite flavors when you join our fam. Subscribe and save on every order — your wallet(and digestion) will thank you.</p>
      <a className={styles.btn} href="#">Subscribe & Save</a>
    </div>
  </section>
);

export default SubscribeBanner;
