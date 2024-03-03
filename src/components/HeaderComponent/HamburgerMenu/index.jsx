import Link from 'next/link';
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './index.module.scss';
const HamburgerMenu = ({ label, href, subItems }) => {
  const renderSubItems = () => {
    if (subItems && subItems.length > 0) {
      return (
        <div className={styles.subMenu}>
          {subItems &&
            subItems.map((subItem) => (
              <Link
                href={subItem.href}
                key={subItem.label}
                className={styles.subMenuItem}
                aria-label={subItem.label}>
                <p className={styles.subItem}>{subItem.label}</p>
              </Link>
            ))}
        </div>
      );
    }
  };

  return (
    /* TODO eğer subItem varsa href tıklandığında bir yere yönlendirme yapılmayacak subMenu gösterilecek */
    <>
      <div className={styles.categoryWrapper}>
        <Link href={href} className={styles.catgoryItem} aria-label={label}>
          <p>{label}</p>
          {subItems && <RiArrowDownSLine />}
        </Link>
        {renderSubItems()}
      </div>
    </>
  );
};

export default HamburgerMenu;
