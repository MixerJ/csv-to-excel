'use client';

import { useEffect } from 'react';
import i18n from '../../lib/i18n';
import AboutPage from '../../about/page';

export default function ZhAboutPage() {
  useEffect(() => {
    i18n.changeLanguage('zh');
    localStorage.setItem('i18nextLng', 'zh');
  }, []);

  return <AboutPage />;
} 