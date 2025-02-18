'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa6';
import '../lib/i18n';

export default function SupportPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('support.title')}</h1>
      <p className="text-lg text-gray-600 mb-8">{t('support.description')}</p>

      {/* Contact Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t('support.contact.title')}</h2>
        <p className="text-gray-600 mb-6">{t('support.contact.description')}</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={`mailto:${t('support.contact.email')}`}
            className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaEnvelope />
            <span>{t('support.contact.email')}</span>
          </a>
          
          <a
            href="https://github.com/yourusername/csv-batch-to-excel/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FaGithub />
            <span>{t('support.contact.github')}</span>
          </a>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">{t('support.resources.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t('support.resources.items', { returnObjects: true }).map((item: { title: string; description: string }, index: number) => (
            <div key={index} className="border rounded-lg p-4 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 