'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../lib/i18n';

export default function AboutPage() {
  const { t } = useTranslation();

  const features = [
    {
      name: t('about.features.batch.title'),
      description: t('about.features.batch.description'),
      icon: '🚀',
    },
    {
      name: t('about.features.design.title'),
      description: t('about.features.design.description'),
      icon: '🎨',
    },
    {
      name: t('about.features.i18n.title'),
      description: t('about.features.i18n.description'),
      icon: '🌐',
    },
    {
      name: t('about.features.mobile.title'),
      description: t('about.features.mobile.description'),
      icon: '📱',
    },
    {
      name: t('about.features.security.title'),
      description: t('about.features.security.description'),
      icon: '🔒',
    },
    {
      name: t('about.features.progress.title'),
      description: t('about.features.progress.description'),
      icon: '📊',
    },
  ];

  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t('about.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('about.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <span className="text-3xl">{feature.icon}</span>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {t('about.tech.title')}
          </h2>
          <div className="mt-8 flex justify-center gap-8 text-gray-600">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind CSS</span>
            <span>XLSX.js</span>
            <span>i18next</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 