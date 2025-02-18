'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import '@/app/lib/i18n';

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

  // Pre-fetch all translations with proper error handling
  const translations = React.useMemo(() => ({
    fileOrganization: getArrayTranslation('blog.posts.batch_conversion.content.file_organization.items'),
    dataValidation: getArrayTranslation('blog.posts.batch_conversion.content.data_validation.items'),
    memoryManagement: getArrayTranslation('blog.posts.batch_conversion.content.memory_management.items'),
    parallelProcessing: getArrayTranslation('blog.posts.batch_conversion.content.parallel_processing.items'),
    fileAccess: getArrayTranslation('blog.posts.batch_conversion.content.error_handling.file_access.items'),
    dataFormat: getArrayTranslation('blog.posts.batch_conversion.content.error_handling.data_format.items'),
    recovery: getArrayTranslation('blog.posts.batch_conversion.content.recovery.items'),
    formatting: getArrayTranslation('blog.posts.batch_conversion.content.quality_control.formatting.items'),
    validation: getArrayTranslation('blog.posts.batch_conversion.content.quality_control.validation.items'),
    automation: getArrayTranslation('blog.posts.batch_conversion.content.automation.items')
  }), [getArrayTranslation]);

  // Helper function to handle single string translations
  const getText = React.useCallback((key: string) => {
    // @ts-expect-error - i18next types are not perfect
    return t(key) as string;
  }, [t]);

  return (
    <div className="prose prose-lg mx-auto max-w-4xl">
      <div className="space-y-8">
        <h1 className="text-center">{getText('blog.posts.batch_conversion.title')}</h1>

        <p>{getText('blog.posts.batch_conversion.content.intro')}</p>

        <h2>{getText('blog.posts.batch_conversion.content.preparation_title')}</h2>

        <h3>{getText('blog.posts.batch_conversion.content.file_organization.title')}</h3>
        <ul>
          {translations.fileOrganization.map((item, index) => (
            <li key={`file-org-${index}`}>{item}</li>
          ))}
        </ul>

        <h3>{getText('blog.posts.batch_conversion.content.data_validation.title')}</h3>
        <ul>
          {translations.dataValidation.map((item, index) => (
            <li key={`data-val-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.batch_conversion.content.performance_title')}</h2>

        <h3>{getText('blog.posts.batch_conversion.content.memory_management.title')}</h3>
        <ol>
          {translations.memoryManagement.map((item, index) => (
            <li key={`mem-mgmt-${index}`}>{item}</li>
          ))}
        </ol>

        <h3>{getText('blog.posts.batch_conversion.content.parallel_processing.title')}</h3>
        <ul>
          {translations.parallelProcessing.map((item, index) => (
            <li key={`parallel-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.batch_conversion.content.error_handling.title')}</h2>

        <h3>{getText('blog.posts.batch_conversion.content.error_handling.common_issues_title')}</h3>
        <ol>
          <li>
            <strong>{getText('blog.posts.batch_conversion.content.error_handling.file_access.title')}</strong>
            <ul>
              {translations.fileAccess.map((item, index) => (
                <li key={`file-access-${index}`}>{item}</li>
              ))}
            </ul>
          </li>
          <li>
            <strong>{getText('blog.posts.batch_conversion.content.error_handling.data_format.title')}</strong>
            <ul>
              {translations.dataFormat.map((item, index) => (
                <li key={`data-format-${index}`}>{item}</li>
              ))}
            </ul>
          </li>
        </ol>

        <h3>{getText('blog.posts.batch_conversion.content.recovery.title')}</h3>
        <ul>
          {translations.recovery.map((item, index) => (
            <li key={`recovery-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>{getText('blog.posts.batch_conversion.content.quality_control.title')}</h2>

        <h3>{getText('blog.posts.batch_conversion.content.quality_control.formatting.title')}</h3>
        <ul>
          {translations.formatting.map((item, index) => (
            <li key={`formatting-${index}`}>{item}</li>
          ))}
        </ul>

        <h3>{getText('blog.posts.batch_conversion.content.quality_control.validation.title')}</h3>
        <ol>
          {translations.validation.map((item, index) => (
            <li key={`validation-${index}`}>{item}</li>
          ))}
        </ol>

        <h2>{getText('blog.posts.batch_conversion.content.automation.title')}</h2>

        <p>
          {getText('blog.posts.batch_conversion.content.automation.description')}
        </p>

        <ul>
          {translations.automation.map((item, index) => (
            <li key={`automation-${index}`}>{item}</li>
          ))}
        </ul>

        <h2>Conclusion</h2>

        <p>{getText('blog.posts.batch_conversion.content.conclusion')}</p>
      </div>
    </div>
  );
}