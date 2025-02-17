'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
}

export default function FileUploader({ onFilesSelected }: FileUploaderProps) {
  const { t } = useTranslation();
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
    onFilesSelected(acceptedFiles);
  }, [onFilesSelected]);

  const removeFile = useCallback((fileToRemove: File) => {
    setFiles(prev => prev.filter(file => file !== fileToRemove));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    multiple: true
  });

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
      >
        <input {...getInputProps()} />
        <CloudArrowUpIcon className="w-12 h-12 mx-auto text-gray-400" />
        <p className="mt-2 text-lg font-medium text-gray-900">{t('common.dropzone.title')}</p>
        <p className="mt-1 text-sm text-gray-500">{t('common.dropzone.description')}</p>
        <p className="mt-1 text-xs text-gray-400">{t('common.dropzone.accept')}</p>
      </div>

      <AnimatePresence>
        {files.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6 divide-y divide-gray-200"
          >
            {files.map((file, index) => (
              <motion.li
                key={`${file.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="py-3 flex justify-between items-center"
              >
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900">{file.name}</span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={() => removeFile(file)}
                  className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
} 