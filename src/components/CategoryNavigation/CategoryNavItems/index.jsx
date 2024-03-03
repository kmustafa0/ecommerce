import Link from 'next/link';
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './index.module.scss';
const CategoryNavItems = ({ label, href, subItems }) => {
  const renderSubItems = () => {
    if (subItems && subItems.length > 0) {
      return (
        <div className={styles.subMenu}>
          {subItems &&
            subItems.map((subItem) => (
              <Link href={subItem.href} key={subItem.label} className={styles.subMenuItem}>
                <p className={styles.subItem}>{subItem.label}</p>
              </Link>
            ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className={styles.categoryWrapper}>
        <Link href={href} className={styles.categoryItems}>
          <p>{label}</p>
          {subItems && <RiArrowDownSLine />}
        </Link>
        {renderSubItems()}
      </div>
    </>
  );
};

export default CategoryNavItems;
