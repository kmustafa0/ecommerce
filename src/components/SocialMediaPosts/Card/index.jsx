import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
const SocialMediaCard = ({ img, text, alt, link }) => {
  return (
    <Link className={styles.imageWrapper} href={link}>
      <span>{text}</span>
      <Image src={img} alt={alt} fill sizes='550' />
    </Link>
  );
};

export default SocialMediaCard;
