import styles from './CurrentImages.module.scss';
import { getImages } from '@/lib/actions';
import CurrentImagesList from './CurrentImagesList';

const CurrentImages = async () => {
  const { images } = await getImages();

  return (
    <>
      <h3>Current Images</h3>
      <ul className={styles.currentImagesList}>
        {images.map((image) => (
          <CurrentImagesList key={image.id} image={image} />
        ))}
      </ul>
    </>
  );
};

export default CurrentImages;
