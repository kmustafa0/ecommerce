import React from 'react';
import styles from './index.module.scss';
import { Logo } from '../Logo';
import { BOTTOM_LINKS, FOOTER_LINKS, MIDDLE_ROW_INFO, SOCIAL_MEDIA_ICONS } from '@/lib/contstants';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles['top-row-container']}>
            {FOOTER_LINKS.map((link, index) => (
              <div key={index} className={styles['column-container']}>
                <ul className={styles.column}>
                  <li>
                    <h3 className={styles['column-header']}>{link.label}</h3>
                  </li>
                  {link.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles['middle-row']}>
            <div className={styles['left-side']}>
              <Logo />
            </div>
            <div className={styles['middle-side']}>
              <p>{MIDDLE_ROW_INFO.address}</p>
            </div>
            <div className={styles['right-side']}>
              <select
                className={styles.select}
                id='languageSelector'
                aria-label='language-selector'>
                {MIDDLE_ROW_INFO.languages.map((language, idx) => (
                  <option key={idx}>{language}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles['bottom-row']}>
            <div className={styles.links}>
              <ul>
                {BOTTOM_LINKS.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
            <div className={styles['social-media-container']}>
              <div className={styles['social-medias']}>
                <ul>
                  {SOCIAL_MEDIA_ICONS.map((socialMedia, idx) => (
                    <li key={idx}>{socialMedia.icon}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
