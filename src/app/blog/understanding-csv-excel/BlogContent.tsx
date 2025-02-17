'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function BlogContent() {
  const { t } = useTranslation();

  return (
    <div className="prose prose-lg mx-auto max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-center">{t('blog.posts.understanding_csv_excel.title')}</h1>

        <p>{t('blog.posts.understanding_csv_excel.content.intro')}</p>

        <h2>{t('blog.posts.understanding_csv_excel.content.csv_title')}</h2>

        <p>{t('blog.posts.understanding_csv_excel.content.csv_description')}</p>

        <h3>{t('blog.posts.understanding_csv_excel.content.csv_advantages.title')}</h3>

        <ol>
          {t('blog.posts.understanding_csv_excel.content.csv_advantages.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>{t('blog.posts.understanding_csv_excel.content.csv_limitations.title')}</h3>

        <ol>
          {t('blog.posts.understanding_csv_excel.content.csv_limitations.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h2>{t('blog.posts.understanding_csv_excel.content.excel_title')}</h2>

        <p>{t('blog.posts.understanding_csv_excel.content.excel_description')}</p>

        <h3>{t('blog.posts.understanding_csv_excel.content.excel_advantages.title')}</h3>

        <ol>
          {t('blog.posts.understanding_csv_excel.content.excel_advantages.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>{t('blog.posts.understanding_csv_excel.content.when_to_use.title')}</h3>

        <p>{t('blog.posts.understanding_csv_excel.content.when_to_use.csv_title')}:</p>
        <ul>
          {t('blog.posts.understanding_csv_excel.content.when_to_use.csv_items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>{t('blog.posts.understanding_csv_excel.content.when_to_use.excel_title')}:</p>
        <ul>
          {t('blog.posts.understanding_csv_excel.content.when_to_use.excel_items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.understanding_csv_excel.content.best_practices.title')}</h2>

        <ol>
          <li>
            <strong>{t('blog.posts.understanding_csv_excel.content.best_practices.data_cleaning.title')}</strong>
            <ul>
              {t('blog.posts.understanding_csv_excel.content.best_practices.data_cleaning.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>

          <li>
            <strong>{t('blog.posts.understanding_csv_excel.content.best_practices.file_organization.title')}</strong>
            <ul>
              {t('blog.posts.understanding_csv_excel.content.best_practices.file_organization.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>

          <li>
            <strong>{t('blog.posts.understanding_csv_excel.content.best_practices.conversion_tips.title')}</strong>
            <ul>
              {t('blog.posts.understanding_csv_excel.content.best_practices.conversion_tips.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h2>Conclusion</h2>

        <p>{t('blog.posts.understanding_csv_excel.content.conclusion')}</p>
      </div>
    </div>
  );
} 