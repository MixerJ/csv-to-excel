'use client';

import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import '../lib/i18n';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQPage() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
  }, [i18n]);

  const faqItems = t('faq.questions', { returnObjects: true }) as FAQItem[];

  return (
    <div className="container mx-auto px-4 py-8">
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