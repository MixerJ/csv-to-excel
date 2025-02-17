'use client';

import { useEffect } from 'react';
import i18n from '../../lib/i18n';
import BlogPage from '../../blog/page';

export default function ZhBlogPage() {
  useEffect(() => {
    i18n.changeLanguage('zh');
    localStorage.setItem('i18nextLng', 'zh');
  }, []);

  return <BlogPage />;
} 