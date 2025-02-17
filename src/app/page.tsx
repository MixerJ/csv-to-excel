'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FileUploader from './components/FileUploader';
import { convertCSVToExcel, ConversionResult } from './lib/converter';
import './lib/i18n';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useTranslation();
  const [results, setResults] = useState<ConversionResult[]>([]);
  const [isConverting, setIsConverting] = useState(false);

  const handleFilesSelected = async (files: File[]) => {
    setIsConverting(true);
    const conversionResults = await Promise.all(
      files.map(file => convertCSVToExcel(file))
    );
    setResults(conversionResults);
    setIsConverting(false);
  };

  const handleDownload = (result: ConversionResult) => {
    if (result.excelBlob) {
      const url = URL.createObjectURL(result.excelBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = result.fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t('common.title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('common.description')}
          </p>
        </motion.div>

        <FileUploader onFilesSelected={handleFilesSelected} />

        {isConverting && (
          <div className="mt-8 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent"></div>
            <p className="mt-2 text-sm text-gray-500">
              {t('common.conversion.progress')}
            </p>
          </div>
        )}

        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <h2 className="text-lg font-semibold mb-4">
              {t('common.conversion.processing', { count: results.length })}
            </h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg ${
                    result.success
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">
                        {result.fileName}
                      </p>
                      {result.error && (
                        <p className="text-sm text-red-600 mt-1">
                          {result.error}
                        </p>
                      )}
                    </div>
                    {result.success && (
                      <button
                        onClick={() => handleDownload(result)}
                        className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        {t('common.conversion.download')}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
