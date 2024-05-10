import Header from '@/components/HeaderComponent';
import Footer from '@/components/FooterComponent';

export default function MainLayout({ children }) {
  return (
    <div className='app'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
