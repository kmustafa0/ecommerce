import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { ADMIN_DASHBOARD_LINKS } from '@/lib/contstants';
import NavigationLink from './NavigationLink';
const Sidebar = ({ admin }) => {
  return (
    <sidebar className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.flexContainer}>
          <div className={`${styles.menu} ${styles.top}`}>
            <div className={styles.adminCard}>
              <Image src={admin.image} alt='admin-image' width={50} height={50} />
              <div className={styles.adminInfo}>
                <span className={styles.adminName}>{admin?.name}</span>
                <span className={styles.adminEmail}>{admin?.email}</span>
              </div>
            </div>
            <div className={styles.navigationWrapper}>
              <ul>
                {ADMIN_DASHBOARD_LINKS.map((link, idx) => (
                  <NavigationLink link={link} key={idx} />
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className={`${styles.menu} ${styles.bottom}`}>
            Sidebar Component Bottom{' '}
            <a href='/' target='_blank'>
              go to home
            </a>
          </div>
        </div>
      </div>
    </sidebar>
  );
};

export default Sidebar;
