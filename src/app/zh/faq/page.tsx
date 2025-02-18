'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function ZhFAQPage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.changeLanguage('zh');
      localStorage.setItem('i18nextLng', 'zh');
      document.documentElement.lang = 'zh';
    };
    changeLanguage();

    // Cleanup function
    return () => {
      document.documentElement.lang = 'en';
    };
  }, [i18n]);

  return (
    <div className="w-full">
      <FAQContent />
    </div>
  );
}

function FAQContent() {
  const { t } = useTranslation();
  const faqItems = t('faq.questions', { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-6">{t('faq.title')}</h1>
      <p className="text-lg text-gray-600 mb-8">{t('faq.description')}</p>

      <div className="space-y-6">
        {faqItems.map((qa, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">{qa.question}</h2>
            <p className="text-gray-700">{qa.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
