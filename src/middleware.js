import { NextResponse } from 'next/server';
import { isAuth } from './lib/auth';
export default function middleware(request) {
  //Incoming cookies
  //const allCookies = request.cookies.getAll();
  //console.log(allCookies);
  //console.log(request.cookies);
  if (!isAuth(request.cookies)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: '/admin/:path*',
};
