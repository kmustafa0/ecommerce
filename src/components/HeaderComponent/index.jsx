'use client';
import React, { useState } from 'react';
import styles from './index.module.scss';
import { HAMBURGER_MENU_LINKS, HEADERLINKS } from '@/lib/contstants';
import Image from 'next/image';
import AccountNavigation from './AccountNavigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import Input from '../ui/Input';
import HamburgerMenu from './HamburgerMenu';
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const handleHamburgerMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbarWrapper}>
          <div className={styles.hamburgerMenu}>
            {/* <HamburgerMenu /> */}{' '}
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
            <Link href={'/'}>
              <Image src={`/logo-black.svg`} alt='logo' width={170} height={50} />
            </Link>
          </div>
          <div className={styles.headerInputWrapper}>
            <Input />
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
      <div className={`${styles.tabletInputWrapper} ${styles.searchInput}`}>
        <input type='text' name='' id='' placeholder='Type any product name here...' />
        <IoSearchOutline className={`${styles.icon} ${styles.tabletInputIcon}`} />
      </div>
      <div className={`${!isOpen ? styles.open : styles.close}`}>
        <div className={styles.hamburgerContainer}>
          <ul>
            {HAMBURGER_MENU_LINKS.map((item) => (
              <li key={item.href}>
                <HamburgerMenu label={item.label} href={item.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
