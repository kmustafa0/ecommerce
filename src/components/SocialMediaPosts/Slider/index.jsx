'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import SocialMediaCard from '../Card';
import { SOCIAL_MEDIA_CAROUSEL_IMAGES } from '@/lib/contstants';
import styles from './index.module.scss';
import AutoScroll from 'embla-carousel-auto-scroll';

const SocialMediaPostSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, dragFree: true }, [
    WheelGesturesPlugin(),
    AutoScroll(true),
  ]);

  return (
    <div className={styles.socialMediaPosts}>
      <div className={styles.socialMediaPostsViewport} ref={emblaRef}>
        <div className={styles.socialMediaPostsContainer}>
          {SOCIAL_MEDIA_CAROUSEL_IMAGES.map((item) => (
            <div className={styles.socialMediaPostsSlide} key={item.path}>
              <SocialMediaCard img={item.path} text={item.title} alt={item.alt} link={item.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPostSlider;
