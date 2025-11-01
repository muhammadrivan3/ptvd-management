/**
 * next-intl configuration
 * Handles internationalization setup for the application
 */

import { getRequestConfig } from "next-intl/server";

const locales = ["en", "id"];

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale)) {
    locale = "en";
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
