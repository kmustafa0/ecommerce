'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { RiMenu2Line } from 'react-icons/ri';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const handleHamburgerMenu = () => {
    setOpen((prev) => !prev);
  };
  console.log(isOpen);

  return (
    <div onClick={handleHamburgerMenu} className={`${!isOpen ? '' : styles.close}`}>
      <RiMenu2Line size={35} style={{ verticalAlign: 'bottom', cursor: 'pointer' }} />
    </div>
  );
};

export default HamburgerMenu;
