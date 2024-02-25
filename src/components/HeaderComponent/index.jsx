import React from 'react';
import styles from './index.module.scss';
import { HEADERLINKS } from '@/lib/contstants';
import Image from 'next/image';
import AccountNavigation from './AccountNavigation';
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
            <svg id='icon-search' viewBox='0 0 32 32' className={styles.icon}>
              <path d='M31.997 27.895l-9.515-9.515c1.111-1.83 1.763-3.968 1.763-6.261 0-6.683-5.437-12.119-12.12-12.119-6.682 0-12.119 5.435-12.119 12.119 0 6.682 5.437 12.119 12.119 12.119 2.293 0 4.433-0.652 6.263-1.763l9.515 9.515 4.094-4.094zM1.541 12.119c0-5.836 4.748-10.586 10.584-10.586s10.586 4.75 10.586 10.586c0 5.838-4.75 10.584-10.586 10.584s-10.584-4.747-10.584-10.584zM21.688 19.755l8.139 8.14-1.925 1.925-8.14-8.139 1.926-1.926z'></path>
            </svg>
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
    </header>
  );
};

export default Header;
