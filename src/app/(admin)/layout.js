import Sidebar from '@/components/Siderbar';
import styles from './layout.module.scss';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/auth';
import Link from 'next/link';

export const metadata = {
  title: {
    template: '%s | Admin Dashboard',
    default: 'Admin Dashboard',
  },
};

export default async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  //console.log(session.user);
  if (!session?.user.isAdmin) {
    return (
      <>
        <div>you are not authorized to view this page</div>
        <Link href={'/'}>go back home page</Link>
      </>
    );
  }
  return (
    <main className={styles.adminWrapper}>
      <Sidebar admin={session.user} />
      <section className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.page}>{children}</div>
        </div>
      </section>
    </main>
  );
}
