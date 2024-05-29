import React from 'react';
import Dropzone from '@/components/Dropzone/Dropzone';
import CurrentImages from '@/components/CurrentImages/CurrentImages';

export const metadata = {
  title: 'Hero Images',
};

const HeroImages = () => {
  return (
    <>
      <h1>Manage Hero Slider Images</h1>
      <section>
        <CurrentImages />
      </section>
      <section>
        <Dropzone />
      </section>
    </>
  );
};

export default HeroImages;
