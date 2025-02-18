import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import '../lib/i18n';

export default function DocsPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

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
            {t('docs.sections.getting_started.items', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.sections.features.title')}</h2>
          <p className="text-gray-600 mb-4">{t('docs.sections.features.description')}</p>
          <ul className="list-disc list-inside space-y-2">
            {t('docs.sections.features.items', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>

        {/* Advanced Usage Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">{t('docs.sections.advanced.title')}</h2>
          <p className="text-gray-600 mb-4">{t('docs.sections.advanced.description')}</p>
          <ul className="list-disc list-inside space-y-2">
            {t('docs.sections.advanced.items', { returnObjects: true }).map((item: string, index: number) => (
              <li key={index} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 