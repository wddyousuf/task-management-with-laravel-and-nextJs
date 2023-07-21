import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
let authRoutes = ['/tasks'];
export function middleware(request) {
  const url = request.nextUrl.clone();
  if (request.cookies.has('user') && request.nextUrl.pathname == '/') {
    url.pathname = '/tasks';
    return NextResponse.redirect(url);
  }

  if (!request.cookies.has('user') && request.nextUrl.pathname != '/') {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/tasks'],
};
