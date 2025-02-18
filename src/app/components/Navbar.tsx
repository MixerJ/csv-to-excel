'use client';

import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../lib/i18n';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function getPathWithoutLocale(path: string) {
  // Remove locale prefix if it exists
  return path.replace(/^\/(en|zh)(?=\/|$)/, '') || '/';
}

function getLocaleFromPath(path: string) {
  const match = path.match(/^\/(en|zh)(?=\/|$)/);
  return match ? match[1] : 'en';
}

function isActivePath(currentPath: string, itemPath: string) {
  // Handle exact matches
  if (currentPath === itemPath) return true;
  
  // Handle blog post routes
  if (itemPath === '/blog' && currentPath.startsWith('/blog/')) return true;
  
  return false;
}

function getLocalizedPath(path: string, targetLocale: string) {
  // Get path without current locale
  const pathWithoutLocale = getPathWithoutLocale(path);
  
  // Special case for root path
  if (pathWithoutLocale === '/') {
    return targetLocale === 'en' ? '/' : `/${targetLocale}`;
  }
  
  // For all other paths
  return targetLocale === 'en' ? pathWithoutLocale : `/${targetLocale}${pathWithoutLocale}`;
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const currentPath = getPathWithoutLocale(pathname);

  useEffect(() => {
    // Sync i18n language with URL locale
    if (i18n.language !== currentLocale) {
      i18n.changeLanguage(currentLocale);
      localStorage.setItem('i18nextLng', currentLocale);
    }
  }, [i18n, currentLocale]);

  const handleLanguageChange = (lang: string) => {
    // Get new localized path
    const newPath = getLocalizedPath(pathname, lang);
    
    // Update language settings
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    
    // Navigate to new path
    window.location.href = newPath;
  };

  const navigation = [
    { name: t('common.nav.home'), href: '/' },
    { name: t('common.nav.blog'), href: '/blog' },
    { name: t('common.nav.about'), href: '/about' },
  ].map(item => ({
    ...item,
    href: getLocalizedPath(item.href, currentLocale)
  }));

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
  ];

  const LanguageButton = ({ lang, isMobile = false }: { lang: typeof languages[0], isMobile?: boolean }) => (
    <button
      onClick={() => handleLanguageChange(lang.code)}
      className={classNames(
        isMobile
          ? 'block rounded-md py-2 px-3 text-base font-medium w-full text-left transition-colors'
          : 'block px-4 py-2 text-sm text-gray-700 w-full text-left hover:text-gray-900 transition-colors',
        isMobile ? '' : 'hover:bg-gray-50',
        i18n.language === lang.code
          ? isMobile ? 'bg-indigo-50 text-indigo-600' : 'font-bold'
          : isMobile ? 'text-gray-600 hover:bg-gray-50 hover:text-gray-800' : ''
      )}
    >
      <span className="inline-block w-6">{lang.flag}</span>
      <span className="ml-2">{lang.name}</span>
    </button>
  );

  return (
    <Disclosure as="nav" className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link 
                    href={getLocalizedPath('/', currentLocale)} 
                    className="text-xl font-bold text-indigo-500 hover:text-indigo-600 transition-colors"
                  >
                    {t('common.title')}
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={classNames(
                        isActivePath(currentPath, getPathWithoutLocale(item.href))
                          ? 'border-indigo-500 text-gray-900'
                          : 'border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-800',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-colors'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <Menu.Button className="flex rounded-full bg-white/50 p-1 text-gray-500 hover:text-gray-600 hover:bg-gray-50 transition-colors focus:outline-none">
                    <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {languages.map((lang) => (
                        <Menu.Item key={lang.code}>
                          {({ active }) => (
                            <div className={active ? 'bg-gray-50' : ''}>
                              <LanguageButton lang={lang} />
                            </div>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-50 hover:text-gray-600 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.href}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    isActivePath(currentPath, getPathWithoutLocale(item.href))
                      ? 'bg-indigo-50 border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium transition-colors'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="border-t border-gray-200 pt-4">
                <div className="px-4">
                  <p className="text-sm font-medium text-gray-500">{t('common.nav.language')}</p>
                  <div className="mt-2 space-y-2">
                    {languages.map((lang) => (
                      <LanguageButton key={lang.code} lang={lang} isMobile />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 