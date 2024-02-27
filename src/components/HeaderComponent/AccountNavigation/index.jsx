'use client';
import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

const user = false;

const AccountNavigation = ({ href, icon, label, subItems }) => {
  const renderSubItems = () => {
    if (label === 'Account' && !user) {
      return (
        <div className={styles.subMenu}>
          <Link href='/login'>
            <p className={`${styles.subItem} ${styles.loginBtn}`}>Login</p>
          </Link>
          <Link href='/register'>
            <p className={`${styles.subItem} ${styles.registerBtn}`}>Register</p>
          </Link>
        </div>
      );
    } else if (subItems && subItems.length > 0) {
      return (
        <div className={styles.subMenu}>
          {subItems.map((subItem) => (
            <Link href={subItem.href} key={subItem.label} className={styles.subMenuItem}>
              {subItem.icon}
              <p className={styles.subItem}>{subItem.label}</p>
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      {label === 'Account' ? (
        user ? (
          <Link href={href} className={styles.link}>
            {icon}
            <span>{label}</span>
          </Link>
        ) : (
          <Link href={href} className={styles.link}>
            {icon}
            <span>Loginasd</span>
          </Link>
        )
      ) : (
        <Link
          href={href}
          className={`${styles.link} ${
            label.toLowerCase() === 'favorites' ? styles.favorites : ''
          }`}>
          {icon}
          <span>{label}</span>
        </Link>
      )}

      {renderSubItems()}
    </div>
  );
};

export default AccountNavigation;
