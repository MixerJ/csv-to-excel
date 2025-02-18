'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocalizedPath } from '../utils/localization';
import { useEffect, useState } from 'react';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername/csv-batch-to-excel',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/yourusername',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      // Force re-render when language changes
      setMounted(false);
      setTimeout(() => setMounted(true), 0);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Instead of returning null, return an empty footer with the same structure
  if (!mounted) {
    return (
      <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-8 sm:py-12" />
        </div>
      </footer>
    );
  }

  const resourceLinks = [
    {
      title: t('footer.resources.tools'),
      links: [
        { name: 'CSV Lint', href: 'https://csvlint.io', isExternal: true },
        { name: 'Excel Compare', href: 'https://www.excel-compare.com', isExternal: true },
        { name: 'CSV Editor Online', href: 'https://www.csvjson.com/csv_viewer', isExternal: true },
      ],
    },
    {
      title: t('footer.resources.converters'),
      links: [
        { name: 'Zamzar', href: 'https://www.zamzar.com', isExternal: true },
        { name: 'CloudConvert', href: 'https://cloudconvert.com', isExternal: true },
        { name: 'Online Convert', href: 'https://www.online-convert.com', isExternal: true },
      ],
    },
    {
      title: t('footer.resources.data'),
      links: [
        { name: 'Pandas', href: 'https://pandas.pydata.org', isExternal: true },
        { name: 'OpenRefine', href: 'https://openrefine.org', isExternal: true },
        { name: 'Data Wrapper', href: 'https://www.datawrapper.de', isExternal: true },
      ],
    },
  ];

  const quickLinks = [
    {
      title: t('footer.quick_links.main'),
      links: [
        { name: t('common.nav.home'), href: '/' },
        { name: t('common.nav.blog'), href: '/blog' },
        { name: t('common.nav.about'), href: '/about' },
      ],
    },
    {
      title: t('footer.quick_links.help'),
      links: [
        { name: t('footer.quick_links.documentation'), href: '/docs' },
        { name: t('footer.quick_links.faq'), href: '/faq' },
        { name: t('footer.quick_links.support'), href: '/support' },
      ],
    },
  ];

  const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-all group"
    >
      {children}
      <svg 
        className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
        />
      </svg>
    </a>
  );

  const InternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={getLocalizedPath(href, pathname)}
      className="group text-gray-600 hover:text-indigo-600 transition-all"
    >
      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
        {children}
      </span>
    </Link>
  );

  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t('footer.title')}
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">
            {/* Brand column */}
            <div className="space-y-6 col-span-1 md:col-span-2 lg:col-span-4">
              <Link
                href={getLocalizedPath('/', pathname)}
                className="inline-flex text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                {t('common.title')}
              </Link>
              <p className="text-base text-gray-600 max-w-md">
                {t('common.description')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-600 transition-colors p-2 hover:bg-indigo-50 rounded-full"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resource links */}
            <div className="grid grid-cols-2 gap-6 col-span-1 md:col-span-2 lg:col-span-6">
              {resourceLinks.map((group) => (
                <div key={group.title} className="group">
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-3 space-y-2">
                    {group.links.map((link) => (
                      <li key={link.name} className="transform transition-transform duration-200 hover:-translate-y-0.5">
                        {link.isExternal ? (
                          <ExternalLink href={link.href}>{link.name}</ExternalLink>
                        ) : (
                          <InternalLink href={link.href}>{link.name}</InternalLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick links */}
            <div className="space-y-6 col-span-1 md:col-span-2 lg:col-span-2">
              {quickLinks.map((group) => (
                <div key={group.title} className="group">
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-3 space-y-2">
                    {group.links.map((link) => (
                      <li key={link.name} className="transform transition-transform duration-200 hover:-translate-y-0.5">
                        <InternalLink href={link.href}>{link.name}</InternalLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 py-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 