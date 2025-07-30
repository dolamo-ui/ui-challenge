
import styles from './Ingredients.module.css';
import flavorsImage from '../assests/flavors.png'; // 👈 adjust path as needed

const Ingredients = () => (
  <section className={`${styles.ingredients} ${styles.container}`}>
    <div className={styles.ingredientsCard}>
      <img src={flavorsImage} alt="Olipop Flavors" /> {/* 👈 use the imported image */}
      <div>
        <h2>|Our Foundational Ingredients</h2>
        <p>
          For over a decade, Ben and David have shared a vision of a healthier, tastier future. Their quest for a product that could undermine the old guard of soda behemoths led them to OLIPOP: a thoughtfully crafted tonic that found its taste in wholesome, hardworking ingredients instead of spoonfuls of sugar.
        </p>
        <a className={styles.secondaryBtn} href="#">Read More</a>
      </div>
    </div>
  </section>
);

export default Ingredients;
