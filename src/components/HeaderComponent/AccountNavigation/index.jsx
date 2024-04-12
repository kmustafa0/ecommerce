'use client';
import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { signOut, useSession } from 'next-auth/react';

const AccountNavigation = ({ href, icon, label, subItems }) => {
  const { data, status } = useSession();
  /* console.log(status); */ //  'authenticated'
  /* console.log(data); */
  /*  {
    user: {
      name: 'User Name',
      email: 'user@email.com',
      image:
      'image-url'
    },
    expires: '2024-05-12T13:49:41.092Z'
  } */
  const isAuthenticated = status === 'authenticated';
  const renderSubItems = () => {
    if (label === 'Account' && !isAuthenticated) {
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
          {subItems.map((subItem) =>
            subItem.label.toLowerCase() === 'logout' ? (
              <span
                key={subItem.label}
                className={styles.subMenuItem}
                aria-label={subItem.label}
                onClick={() => signOut()}>
                {subItem.icon}
                <p className={styles.subItem}>{subItem.label}</p>
              </span>
            ) : (
              <Link
                href={subItem.href}
                key={subItem.label}
                className={styles.subMenuItem}
                aria-label={subItem.label}>
                {subItem.icon}
                <p className={styles.subItem}>{subItem.label}</p>
              </Link>
            )
          )}
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      {label === 'Account' ? (
        isAuthenticated ? (
          <Link href={href} className={styles.link} aria-label={label}>
            {icon}
            <span>{label}</span>
          </Link>
        ) : (
          <Link href={'/login'} className={styles.link} aria-label='Login'>
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
