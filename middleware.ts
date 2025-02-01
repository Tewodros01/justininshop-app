import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Check if the user is authenticated
    if (!req.nextauth?.token) {
      return NextResponse.redirect(new URL("/auth/signin", req.url)); // ✅ Redirect to correct sign-in page
    }

    return NextResponse.next(); // ✅ Ensure response continues for authenticated users
  },
  {
    pages: {
      signIn: "/auth/signin", // ✅ Redirect users to the sign-in page if not authenticated
    },
  }
);

// Apply middleware only to protected routes
export const config = { matcher: ["/dashboard/:path*"] };
