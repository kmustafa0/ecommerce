import AddNewProducts from '@/components/AddNewProducts/AddNewProducts';
import CurrentProducts from '@/components/CurrentProducts/CurrentProducts';
import React from 'react';

export const metadata = {
  title: 'Products',
};

const HeroImages = () => {
  return (
    <>
      <h1>Manage Products</h1>
      <section>
        <CurrentProducts />
      </section>
      <section>
        <AddNewProducts />
      </section>
    </>
  );
};

export default HeroImages;
