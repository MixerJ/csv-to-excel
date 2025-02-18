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
        <h1 className="text-center">{getText('blog.posts.data_security.title')}</h1>

        <p>{getText('blog.posts.data_security.content.intro')}</p>

        <h2>{getText('blog.posts.data_security.content.risks.title')}</h2>

        <p>{getText('blog.posts.data_security.content.risks.description')}</p>

        <ul>
          {getArrayTranslation('blog.posts.data_security.content.risks.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.data_security.content.local_vs_cloud.title')}</h2>

        <h3>{getText('blog.posts.data_security.content.local_vs_cloud.local_benefits.title')}</h3>
        <ul>
          {getArrayTranslation('blog.posts.data_security.content.local_vs_cloud.local_benefits.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>{getText('blog.posts.data_security.content.local_vs_cloud.cloud_considerations.title')}</h3>
        <ul>
          {getArrayTranslation('blog.posts.data_security.content.local_vs_cloud.cloud_considerations.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.data_security.content.protection.title')}</h2>

        <ol>
          <li>
            <strong>{getText('blog.posts.data_security.content.protection.encryption.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.data_security.content.protection.encryption.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>{getText('blog.posts.data_security.content.protection.access_control.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.data_security.content.protection.access_control.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h2>{getText('blog.posts.data_security.content.compliance.title')}</h2>

        <p>{getText('blog.posts.data_security.content.compliance.description')}</p>

        <ul>
          {getArrayTranslation('blog.posts.data_security.content.compliance.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.data_security.content.development.title')}</h2>

        <p>{getText('blog.posts.data_security.content.development.description')}</p>

        <ol>
          <li>
            <strong>{getText('blog.posts.data_security.content.development.code_security.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.data_security.content.development.code_security.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>{getText('blog.posts.data_security.content.development.data_handling.title')}</strong>
            <ul>
              {getArrayTranslation('blog.posts.data_security.content.development.data_handling.items').map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h2>{getText('blog.posts.data_security.content.incident_response.title')}</h2>

        <p>{getText('blog.posts.data_security.content.incident_response.description')}</p>

        <ul>
          {getArrayTranslation('blog.posts.data_security.content.incident_response.items').map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h2>Conclusion</h2>

        <p>{getText('blog.posts.data_security.content.conclusion')}</p>
      </div>
    </div>
  );
} 