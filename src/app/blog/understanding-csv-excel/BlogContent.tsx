'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function BlogContent() {
  const { t } = useTranslation();

  // Helper function to get array translations with proper typing
  const getArrayTranslation = React.useCallback((key: string) => {
    try {
      // @ts-expect-error - i18next types are not perfect with returnObjects
      const result = t(key, { returnObjects: true, defaultValue: [] });
      return result as unknown as string[];
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return [];
    }
  }, [t]);

  // Helper function to handle single string translations
  const getText = React.useCallback((key: string) => {
    // @ts-expect-error - i18next types are not perfect
    return t(key) as string;
  }, [t]);

  return (
    <div className="prose prose-lg mx-auto max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-center">{getText('blog.posts.understanding_csv_excel.title')}</h1>

        <p>{getText('blog.posts.understanding_csv_excel.content.intro')}</p>

        <h2>{getText('blog.posts.understanding_csv_excel.content.csv_title')}</h2>

        <p>{getText('blog.posts.understanding_csv_excel.content.csv_description')}</p>

        <h3>{getText('blog.posts.understanding_csv_excel.content.csv_advantages.title')}</h3>

        <ol>
          {getArrayTranslation('blog.posts.understanding_csv_excel.content.csv_advantages.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>{getText('blog.posts.understanding_csv_excel.content.csv_limitations.title')}</h3>

        <ol>
          {getArrayTranslation('blog.posts.understanding_csv_excel.content.csv_limitations.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h2>{getText('blog.posts.understanding_csv_excel.content.excel_title')}</h2>

        <p>{getText('blog.posts.understanding_csv_excel.content.excel_description')}</p>

        <h3>{getText('blog.posts.understanding_csv_excel.content.excel_advantages.title')}</h3>

        <ol>
          {getArrayTranslation('blog.posts.understanding_csv_excel.content.excel_advantages.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>{getText('blog.posts.understanding_csv_excel.content.when_to_use.title')}</h3>

        <p>{getText('blog.posts.understanding_csv_excel.content.when_to_use.csv_title')}:</p>
        <ul>
          {getArrayTranslation('blog.posts.understanding_csv_excel.content.when_to_use.csv_items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>{getText('blog.posts.understanding_csv_excel.content.when_to_use.excel_title')}:</p>
        <ul>
          {getArrayTranslation('blog.posts.understanding_csv_excel.content.when_to_use.excel_items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.understanding_csv_excel.content.best_practices.title')}</h2>

        <ol>
          <li>
            <strong>{getText('blog.posts.understanding_csv_excel.content.best_practices.data_cleaning.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.understanding_csv_excel.content.best_practices.data_cleaning.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>

          <li>
            <strong>{getText('blog.posts.understanding_csv_excel.content.best_practices.file_organization.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.understanding_csv_excel.content.best_practices.file_organization.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>

          <li>
            <strong>{getText('blog.posts.understanding_csv_excel.content.best_practices.conversion_tips.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.understanding_csv_excel.content.best_practices.conversion_tips.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h2>Conclusion</h2>

        <p>{getText('blog.posts.understanding_csv_excel.content.conclusion')}</p>
      </div>
    </div>
  );
} 