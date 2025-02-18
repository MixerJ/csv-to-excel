export function getLocalizedPath(path: string, currentPath: string) {
  const defaultLocale = 'en';
  const locales = ['en', 'zh'];
  
  // Get current locale from path
  const currentLocale = currentPath.split('/')[1];
  const isValidLocale = locales.includes(currentLocale);
  const locale = isValidLocale ? currentLocale : defaultLocale;

  // Remove locale prefix if it exists
  const pathWithoutLocale = path.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
  
  // Special case for root path
  if (pathWithoutLocale === '/') {
    return locale === defaultLocale ? '/' : `/${locale}`;
  }
  
  // For all other paths
  return locale === defaultLocale ? pathWithoutLocale : `/${locale}${pathWithoutLocale}`;
} 