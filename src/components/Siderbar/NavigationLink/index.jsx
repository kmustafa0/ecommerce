'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const NavigationLink = ({ link }) => {
  const pathname = usePathname();

  const isActive = pathname === link.href;

  return (
    <li className={`${styles.sidebarListItem} ${isActive ? styles.active : ''}`}>
      <Link href={link.href} className={`${styles.link}`} aria-label={link.label}>
        {link.icon}
        <span>{link.label}</span>
      </Link>
    </li>
  );
};

export default NavigationLink;
