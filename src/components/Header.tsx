
import styles from './Header.module.css';
import logo from '../assests/logo.png'; // Adjust path as needed

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="OLIPOP Logo" />
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Shop Online</a>
          <a href="#" className={styles.navLink}>Find in Store</a>
          <a href="#" className={styles.navLink}>Learn More</a>
        </nav>
        <a href="#" className={`${styles.btn} ${styles.subscribeBtn}`}>
          Subscribe
        </a>
      </div>
    </header>
  );
};

export default Header;
