'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { HAMBURGER_MENU_LINKS, HEADERLINKS } from '@/lib/contstants';
import AccountNavigation from './AccountNavigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import HamburgerMenu from './HamburgerMenu';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';
import TopLinks from './TopLinks/page';
import { Logo } from '../Logo';
import CategoryNavigation from '../CategoryNavigation';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleHamburgerMenu = () => {
    setOpen((prev) => !prev);
  };

  if (typeof window !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
  return (
    <header className={styles.section}>
      <div className={styles.topLinks}>
        <TopLinks />
      </div>
      <div className={styles.container}>
        <div className={styles.navbarWrapper}>
          <div className={styles.hamburgerMenu}>
            {isOpen ? (
              <RiCloseLine
                size={35}
                style={{ verticalAlign: 'bottom', cursor: 'pointer' }}
                onClick={handleHamburgerMenu}
              />
            ) : (
              <RiMenu2Line
                size={35}
                style={{ verticalAlign: 'bottom', cursor: 'pointer' }}
                onClick={handleHamburgerMenu}
              />
            )}
          </div>

          <div className={styles.logoWrapper}>
            <Link href={'/'} aria-label='Home'>
              <Logo />
            </Link>
          </div>
          <div className={styles.headerInputWrapper}>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Type any product name here...'
            />
            <IoSearchOutline className={styles.icon} />
          </div>
          <div className={styles.accountNavigationWrapper}>
            <nav>
              <ul>
                {HEADERLINKS.map((item) => (
                  <li key={item.href}>
                    <AccountNavigation
                      icon={item.icon}
                      label={item.label}
                      href={item.href}
                      subItems={item.subItems}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* TABLET INPUT */}
      <div className={styles.tabletInputWrapper}>
        <input
          type='text'
          name='search'
          id='tabletSearch'
          placeholder='Type any product name here...'
        />
        <IoSearchOutline className={`${styles.icon} ${styles.tabletInputIcon}`} />
      </div>
      {/* HAMBURGER MENU */}
      <div className={`${!isOpen ? styles.open : styles.close}`}>
        <div className={styles.hamburgerContainer}>
          <ul>
            {HAMBURGER_MENU_LINKS.map((item) => (
              <li key={item.href}>
                <HamburgerMenu label={item.label} href={item.href} subItems={item.subItems} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CategoryNavigation />
    </header>
  );
};

export default Header;
