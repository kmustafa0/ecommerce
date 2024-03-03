import React from 'react';
import styles from './index.module.scss';
import { HAMBURGER_MENU_LINKS } from '@/lib/contstants';
import CategoryNavItems from './CategoryNavItems';

const CategoryNavigation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul>
            {HAMBURGER_MENU_LINKS.map((item) => (
              <li key={item.label}>
                <CategoryNavItems label={item.label} href={item.href} subItems={item.subItems} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavigation;
