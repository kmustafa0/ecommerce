'use client';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const HamburgerMenu = ({ href, icon, label, subItems }) => {
  return (
    <div>
      <Link href={href} className={styles.test}>
        {icon}
        {label}
      </Link>
    </div>
  );
};

export default HamburgerMenu;
