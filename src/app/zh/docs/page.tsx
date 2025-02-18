'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function ZhDocsPage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('zh');
    localStorage.setItem('i18nextLng', 'zh');
  }, [i18n]);

  return (
    <div className="w-full">
      <DocsContent />
    </div>
  );
}

function DocsContent() {
  const { t } = useTranslation();
  const gettingStartedItems = t('docs.sections.getting_started.items', { returnObjects: true }) as string[];
  const featureItems = t('docs.sections.features.items', { returnObjects: true }) as string[];
  const advancedItems = t('docs.sections.advanced.items', { returnObjects: true }) as string[];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('docs.title')}</h1>
      <p className="text-lg text-gray-600 mb-8">{t('docs.description')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Getting Started Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.sections.getting_started.title')}</h2>
          <p className="text-gray-600 mb-4">{t('docs.sections.getting_started.description')}</p>
          <ul className="list-disc list-inside space-y-2">
            {gettingStartedItems.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.sections.features.title')}</h2>
          <p className="text-gray-600 mb-4">{t('docs.sections.features.description')}</p>
          <ul className="list-disc list-inside space-y-2">
            {featureItems.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>

        {/* Advanced Usage Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.sections.advanced.title')}</h2>
          <p className="text-gray-600 mb-4">{t('docs.sections.advanced.description')}</p>
          <ul className="list-disc list-inside space-y-2">
            {advancedItems.map((item, index) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 