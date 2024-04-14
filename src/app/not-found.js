import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>Sorry, Page Not Found!</h1>
      <p>Unfortunately, the page you are looking for is not available.</p>
      <Link href='/'>Back to homepage</Link>
    </div>
  );
}
