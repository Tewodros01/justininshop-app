import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const isAuthenticated = !!req.nextauth?.token;

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/auth/signin', req.url)); // ✅ Redirect to sign-in page
    }

    return NextResponse.next(); // ✅ Continue if authenticated
  },
  {
    pages: {
      signIn: '/auth/signin', // ✅ Automatically handled by NextAuth
    },
  },
);

// Apply middleware only to protected routes
export const config = { matcher: ['/dashboard/:path*'] };
