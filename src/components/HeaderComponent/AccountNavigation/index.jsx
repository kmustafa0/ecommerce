'use client';
import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

const user = true;

const AccountNavigation = ({ href, icon, label, subItems }) => {
  const renderSubItems = () => {
    if (label === 'Account' && !user) {
      return (
        <div className={styles.subMenu}>
          <Link href='/login' aria-label='Login'>
            <p className={`${styles.subItem} ${styles.loginBtn}`}>Login</p>
          </Link>
          <Link href='/register' aria-label='Register'>
            <p className={`${styles.subItem} ${styles.registerBtn}`}>Register</p>
          </Link>
        </div>
      );
    } else if (subItems && subItems.length > 0) {
      return (
        <div className={styles.subMenu}>
          {subItems.map((subItem) => (
            <Link
              href={subItem.href}
              key={subItem.label}
              className={styles.subMenuItem}
              aria-label={subItem.label}>
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
          <Link href={href} className={styles.link} aria-label={label}>
            {icon}
            <span>{label}</span>
          </Link>
        ) : (
          <Link href={href} className={styles.link} aria-label='Login'>
            {icon}
            <span>Login</span>
          </Link>
        )
      ) : (
        <Link
          href={href}
          className={`${styles.link} ${
            label.toLowerCase() === 'favorites' ? styles.favorites : ''
          }`}
          aria-label={label}>
          {icon}
          <span>{label}</span>
        </Link>
      )}

      {renderSubItems()}
    </div>
  );
};

export default AccountNavigation;
