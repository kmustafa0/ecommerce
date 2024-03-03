import { TOP_LINKS } from '@/lib/contstants';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';
const TopLinks = () => {
  return (
    <>
      <ul className={styles.topLinkList}>
        {TOP_LINKS.map((item) => (
          <li
            key={item.href}
            className={`${item.href.startsWith('telto') ? styles.highlight : ''}`}>
            <Link href={item.href} aria-label={item.label}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopLinks;
