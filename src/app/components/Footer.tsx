'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocalizedPath } from '../utils/localization';

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();

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
      title: t('footer.quick_links.blog'),
      links: [
        { name: t('blog.posts.understanding_csv_excel.title'), href: '/blog/understanding-csv-excel' },
        { name: t('blog.posts.batch_conversion.title'), href: '/blog/batch-conversion-best-practices' },
        { name: t('blog.posts.data_security.title'), href: '/blog/data-security-in-file-conversion' },
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
      className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors group"
    >
      {children}
      <svg 
        className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" 
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
      className="text-gray-600 hover:text-indigo-600 transition-colors"
    >
      {children}
    </Link>
  );

  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        {t('footer.title')}
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand column */}
            <div className="space-y-8 col-span-1 md:col-span-2 lg:col-span-1">
              <Link
                href={getLocalizedPath('/', pathname)}
                className="inline-flex text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                {t('common.title')}
              </Link>
              <p className="text-base text-gray-600 max-w-md">
                {t('common.description')}
              </p>
              <div className="flex space-x-6">
                <ExternalLink href="https://github.com/yourusername/csv-batch-to-excel">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </ExternalLink>
              </div>
            </div>

            {/* Resource links */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
              {resourceLinks.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.name}>
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
            <div className="space-y-8">
              {quickLinks.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                    {group.title}
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.name}>
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
        <div className="border-t border-gray-200 py-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
} 