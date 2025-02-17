'use client';

import { useEffect } from 'react';
import i18n from '../lib/i18n';
import HomePage from '../page';

export default function ZhHomePage() {
  useEffect(() => {
    i18n.changeLanguage('zh');
    localStorage.setItem('i18nextLng', 'zh');
  }, []);

  return <HomePage />;
} 