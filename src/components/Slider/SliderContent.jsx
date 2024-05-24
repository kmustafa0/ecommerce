import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SliderContent = ({ images }) => {
  return (
    <>
      {images.length >= 1 &&
        images.map((image) => (
          <div key={image.id} className='embla__slide'>
            <Link href={image.link} aria-label={image.alt}>
              <Image src={image.src} alt={image.alt} fill priority />
            </Link>
          </div>
        ))}
    </>
  );
};

export default SliderContent;
