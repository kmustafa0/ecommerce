import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
const AccountNavigation = ({ href, icon, label, subItems }) => {
  return (
    <Link href={href} className={styles.link}>
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default AccountNavigation;
