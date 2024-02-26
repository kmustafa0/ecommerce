import React from 'react';
import styles from './index.module.scss';
import { HEADERLINKS } from '@/lib/contstants';
import Image from 'next/image';
import AccountNavigation from './AccountNavigation';
import Link from 'next/link';
import { IoSearchOutline } from 'react-icons/io5';
import Input from '../ui/Input';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbarWrapper}>
          {/*  <HamburgerMenu /> */}
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
    </header>
  );
};

export default Header;
