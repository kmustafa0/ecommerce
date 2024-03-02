import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/HeaderComponent';
import Footer from '@/components/FooterComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Lusso Attire',
    default: 'Lusso Attire',
  },
  description:
    'Lusso Attire: Discover exquisite Italian fashion. Handcrafted luxury clothing and accessories for the discerning individual',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning>
        <div className='container'>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
