'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function BlogContent() {
  const { t } = useTranslation();

  return (
    <div className="prose prose-lg mx-auto max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-center">{t('blog.posts.batch_conversion.title')}</h1>

        <p>{t('blog.posts.batch_conversion.content.intro')}</p>

        <h2>{t('blog.posts.batch_conversion.content.preparation_title')}</h2>

        <h3>{t('blog.posts.batch_conversion.content.file_organization.title')}</h3>
        <ul>
          {t('blog.posts.batch_conversion.content.file_organization.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('blog.posts.batch_conversion.content.data_validation.title')}</h3>
        <ul>
          {t('blog.posts.batch_conversion.content.data_validation.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.batch_conversion.content.performance_title')}</h2>

        <h3>{t('blog.posts.batch_conversion.content.memory_management.title')}</h3>
        <ol>
          {t('blog.posts.batch_conversion.content.memory_management.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h3>{t('blog.posts.batch_conversion.content.parallel_processing.title')}</h3>
        <ul>
          {t('blog.posts.batch_conversion.content.parallel_processing.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.batch_conversion.content.error_handling.title')}</h2>

        <h3>{t('blog.posts.batch_conversion.content.error_handling.common_issues_title')}</h3>
        <ol>
          <li>
            <strong>{t('blog.posts.batch_conversion.content.error_handling.file_access.title')}</strong>
            <ul>
              {t('blog.posts.batch_conversion.content.error_handling.file_access.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>{t('blog.posts.batch_conversion.content.error_handling.data_format.title')}</strong>
            <ul>
              {t('blog.posts.batch_conversion.content.error_handling.data_format.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h3>{t('blog.posts.batch_conversion.content.recovery.title')}</h3>
        <ul>
          {t('blog.posts.batch_conversion.content.recovery.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.batch_conversion.content.quality_control.title')}</h2>

        <h3>{t('blog.posts.batch_conversion.content.quality_control.formatting.title')}</h3>
        <ul>
          {t('blog.posts.batch_conversion.content.quality_control.formatting.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('blog.posts.batch_conversion.content.quality_control.validation.title')}</h3>
        <ol>
          {t('blog.posts.batch_conversion.content.quality_control.validation.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <h2>{t('blog.posts.batch_conversion.content.automation.title')}</h2>

        <p>
          {t('blog.posts.batch_conversion.content.automation.description')}
        </p>

        <ul>
          {t('blog.posts.batch_conversion.content.automation.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Conclusion</h2>

        <p>{t('blog.posts.batch_conversion.content.conclusion')}</p>
      </div>
    </div>
  );
}