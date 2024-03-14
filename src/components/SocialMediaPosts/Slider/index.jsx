'use client';
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import SocialMediaCard from '../Card';
import { SOCIAL_MEDIA_CAROUSEL_IMAGES } from '@/lib/contstants';
import styles from './index.module.scss';
import AutoScroll from 'embla-carousel-auto-scroll';
import { SlControlPlay, SlControlPause } from 'react-icons/sl';

const SocialMediaPostSlider = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true }, [
    WheelGesturesPlugin(),
    AutoScroll(true),
  ]);

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    if (isPlaying) {
      autoScroll.stop();
    } else {
      autoScroll.play();
    }
    setIsPlaying(!isPlaying);
  }, [emblaApi, isPlaying]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(false));
  }, [emblaApi]);

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
        <div className={styles.controls}>
          <button onClick={toggleAutoplay} className={styles.togglePlay} type='button'>
            {isPlaying ? <SlControlPause size={25} /> : <SlControlPlay size={25} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaPostSlider;
