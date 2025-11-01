/**
 * Next.js middleware for internationalization
 * Handles locale detection and routing
 */

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",

  // Always use locale prefix for all routes
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|id)/:path*"],
};
