import React from 'react';
import styles from './index.module.scss';
import SocialMediaPostSlider from './Slider';
const SocialMediaPosts = () => {
  return (
    <section className='socialMediaPosts'>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>we on social media</h2>
          </div>
          <SocialMediaPostSlider />
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPosts;
