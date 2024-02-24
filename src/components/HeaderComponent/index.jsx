import React from 'react';
import styles from './index.module.scss';
import { HEADERLINKS } from '@/lib/contstants';
import Image from 'next/image';
import AccountNavigation from './Nav/AccountNavigation';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbarWrapper}>
          {/*  <HamburgerMenu /> */}
          <div>
            <Link href={'/'}>
              <Image src={`/logo-black.svg`} alt='logo' width={170} height={50} />
            </Link>
          </div>
          <div className={styles.headerInputWrapper}>
            <input type='text' name='' id='' placeholder='Type any product name here...' />
          </div>
          <div className={styles.accountNavigationWrapper}>
            <nav>
              <ul>
                {HEADERLINKS.map((item) => (
                  <li key={item.href}>
                    <AccountNavigation icon={item.icon} label={item.label} href={item.href} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
