
import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import olipopLogo from '../assests/olipop-logo.png';  // Adjust path as necessary

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`${styles.container} ${styles['footer-container']}`}>
      <div className={styles['footer-signup']}>
        <div className={styles['logo-title-row']}>
          <img src={olipopLogo} alt="OLIPOP Logo" className={styles.logo} />
          <h4 className={styles['footer-title']}>
            Stay Connected With<br />OLIPOP
          </h4>
        </div>
      </div>

      <div className={styles['email-subscribe-wrapper']}>
        <form className={styles['email-subscribe']}>
          <input type="email" placeholder="Enter your email" />
          <button className={styles.btn} type="submit">Subscribe</button>
        </form>
      </div>

      <div className={styles['footer-links']}>
        <div>
          <h4>FLAVOURS</h4>
          <ul>
            <li>Watermelon Lime</li>
            <li>Vintage Cola</li>
            <li>Classic Root Beer</li>
            <li>Doctor Goodwin</li>
            <li>Banana Cream</li>
            <li>Strawberry Vanilla</li>
            <li>Ginger Lemon</li>
          </ul>
        </div>

        <div>
          <h4>INFORMATION</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4>SOCIAL MEDIA</h4>
          <div className={styles['social-icons']}>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
