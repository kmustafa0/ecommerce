import Link from 'next/link';
import React from 'react';
import styles from './index.module.scss';

const AccountNavigation = ({ href, icon, label, subItems }) => {
  /* TODO eğer giriş yapılı değilse 2 buton alt alta giriş yap üye ol ve eğer sepet boşsa bişeyler ekle butonu  */
  return (
    <div className={styles.container}>
      <Link href={href} className={styles.link}>
        {icon}
        <span>{label}</span>
      </Link>
      {subItems && subItems.length > 0 && (
        <div className={styles.subMenu}>
          {subItems.map((subItem) => (
            <Link href={subItem.href} key={subItem.label}>
              {subItem.icon}
              <p className={styles.subItem}>{subItem.label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountNavigation;
