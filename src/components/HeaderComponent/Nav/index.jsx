import React from 'react';
import styles from './index.module.scss';
import { HEADERLINKS } from '@/lib/contstants';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {HEADERLINKS.map((item) => (
          <li className={styles.item} key={item.href}>
            <Link href={item.href}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
