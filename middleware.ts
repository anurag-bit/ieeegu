import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server'



// This middleware function will run before any request is processed
export function middleware(request: NextRequest) {
  // For blog post URLs, ensure they're properly processed
  const pathname = request.nextUrl.pathname;
  
  // Handle blog post pages
  if (pathname.startsWith('/blog/') && 
      !pathname.includes('/category/') && 
      !pathname.includes('/author/') && 
      !pathname.includes('/organization/')) {
    // This is a blog post URL - ensure it's properly handled
    const slug = pathname.split('/')[2]; // Extract slug from URL
    
    if (slug) {
      // Add a header with the last-accessed timestamp to help with content freshness
      const response = NextResponse.next();
      response.headers.set('x-blog-accessed', new Date().toISOString());
      
      // Log request (in development only)
      if (process.env.NODE_ENV !== 'production') {
        console.log(`Blog post requested: ${slug} at ${new Date().toISOString()}`);
      }
     
      
      return response;
    }
  }

  // Continue with the request
  return NextResponse.next();
}


export const config = {
  // Only run middleware for blog-related paths
  matcher: [
    '/blog/:path*',
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
export default clerkMiddleware()
