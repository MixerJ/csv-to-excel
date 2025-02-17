'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../lib/i18n';

export default function BlogContent() {
  const { t } = useTranslation();

  return (
    <div className="prose prose-lg mx-auto max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-center">{t('blog.posts.data_security.title')}</h1>

        <p>{t('blog.posts.data_security.content.intro')}</p>

        <h2>{t('blog.posts.data_security.content.risks.title')}</h2>

        <p>{t('blog.posts.data_security.content.risks.description')}</p>

        <ul>
          {t('blog.posts.data_security.content.risks.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.data_security.content.local_vs_cloud.title')}</h2>

        <h3>{t('blog.posts.data_security.content.local_vs_cloud.local_benefits.title')}</h3>
        <ul>
          {t('blog.posts.data_security.content.local_vs_cloud.local_benefits.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{t('blog.posts.data_security.content.local_vs_cloud.cloud_considerations.title')}</h3>
        <ul>
          {t('blog.posts.data_security.content.local_vs_cloud.cloud_considerations.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.data_security.content.protection.title')}</h2>

        <ol>
          <li>
            <strong>{t('blog.posts.data_security.content.protection.encryption.title')}</strong>
            <ul>
              {t('blog.posts.data_security.content.protection.encryption.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>{t('blog.posts.data_security.content.protection.access_control.title')}</strong>
            <ul>
              {t('blog.posts.data_security.content.protection.access_control.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h2>{t('blog.posts.data_security.content.compliance.title')}</h2>

        <p>{t('blog.posts.data_security.content.compliance.description')}</p>

        <ul>
          {t('blog.posts.data_security.content.compliance.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{t('blog.posts.data_security.content.development.title')}</h2>

        <p>{t('blog.posts.data_security.content.development.description')}</p>

        <ol>
          <li>
            <strong>{t('blog.posts.data_security.content.development.code_security.title')}</strong>
            <ul>
              {t('blog.posts.data_security.content.development.code_security.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>{t('blog.posts.data_security.content.development.data_handling.title')}</strong>
            <ul>
              {t('blog.posts.data_security.content.development.data_handling.items', { returnObjects: true }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h2>{t('blog.posts.data_security.content.incident_response.title')}</h2>

        <p>{t('blog.posts.data_security.content.incident_response.description')}</p>

        <ul>
          {t('blog.posts.data_security.content.incident_response.items', { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Conclusion</h2>

        <p>{t('blog.posts.data_security.content.conclusion')}</p>
      </div>
    </div>
  );
} 