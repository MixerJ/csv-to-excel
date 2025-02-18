'use client';

import { useEffect } from 'react';
import i18n from '../../../lib/i18n';
import BlogContent from '../../../blog/data-security-in-file-conversion/BlogContent';

export default function ZhBlogPost() {
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
  }, []);

  return <BlogContent />;
} 