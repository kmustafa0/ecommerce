import Link from 'next/link';
import React, { useState } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import styles from './index.module.scss';

const HamburgerMenu = ({ label, subItems, onCloseMenu }) => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const handleCategoryClick = () => {
    if (subItems && subItems.length > 0) {
      setSubMenuVisible(!isSubMenuVisible);
    }
  };

  const handleSubItemClick = () => {
    onCloseMenu();
  };

  const renderSubItems = () => {
    if (subItems && subItems.length > 0) {
      return (
        <div className={`${styles.subMenu} ${isSubMenuVisible ? styles.visible : ''}`}>
          {subItems &&
            subItems.map((subItem) => (
              <Link
                href={subItem.href}
                key={subItem.label}
                className={styles.subMenuItem}
                aria-label={subItem.label}
                onClick={handleSubItemClick}>
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
        <div
          className={styles.catgoryItem}
          onClick={handleCategoryClick}
          aria-label={label}
          role='button'>
          <p>{label}</p>
          {subItems && (isSubMenuVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />)}
        </div>
        {renderSubItems()}
      </div>
    </>
  );
};

export default HamburgerMenu;
