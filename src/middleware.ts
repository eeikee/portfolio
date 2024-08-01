import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ja', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: 'never'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|ja|en)/:path*']
};