'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import '../lib/i18n';

const blogPosts = [
  {
    slug: 'understanding-csv-excel',
    translationKey: 'understanding_csv_excel',
    date: '2024-02-17',
    readTime: '5 min read',
  },
  {
    slug: 'batch-conversion-best-practices',
    translationKey: 'batch_conversion',
    date: '2024-02-18',
    readTime: '6 min read',
  },
  {
    slug: 'data-security-in-file-conversion',
    translationKey: 'data_security',
    date: '2024-02-19',
    readTime: '7 min read',
  }
];

export default function BlogPage() {
  const { t } = useTranslation();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          {t('blog.title')}
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          {t('blog.description')}
        </p>
      </motion.div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString()}
                  </time>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`blog.posts.${post.translationKey}.title`)}
                </h2>
                <p className="text-gray-600">
                  {t(`blog.posts.${post.translationKey}.description`)}
                </p>
                <div className="mt-4">
                  <span className="text-indigo-600 hover:text-indigo-500">
                    {t('blog.read_more')} →
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
} 