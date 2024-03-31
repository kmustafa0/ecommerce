import { PRODUCT } from '@/lib/contstants';
import styles from './index.module.scss';

const ProductDetails = () => {
  return (
    <>
      <div className={styles.descriptionContainer}>
        <h2>Description</h2>

        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: PRODUCT.description }}
        />
      </div>

      <div className={styles.detailsContainer}>
        <h2>Fabric &amp; Care</h2>

        <div className={styles.detailsList}>
          <ul role='list'>
            {PRODUCT.details.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
