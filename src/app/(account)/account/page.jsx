import { getAuthSession } from '@/utils/auth';
import React from 'react';
import styles from './accountpage.module.scss';
export const metadata = {
  title: 'Account',
};

const AccountPage = async () => {
  const session = await getAuthSession();
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h4>Current Session</h4>
          <pre>{JSON.stringify({ session }, null, 2)}</pre>
        </div>
      </div>
    </section>
  );
};

export default AccountPage;
